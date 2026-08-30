import type { Resource } from "@/types/resource";
import type { Slot, SlotStatus } from "@/types/booking";
import { minutesToTime, timeToMinutes, todayKey } from "./utils";

export function buildSlotId(date: string, resourceId: string, startTime: string) {
  return `${date}_${resourceId}_${startTime}`;
}

interface GenerateSlotsInput {
  resource: Resource;
  date: string; // YYYY-MM-DD
  bookedSlotIds: Set<string>;
  reservedSlotIds: Set<string>;
  disabledSlotIds: Map<string, string>; // slotId -> reason
}

/**
 * Generates every slot for a resource on a given date from
 * openingTime / closingTime / slotDuration. Never hardcoded.
 * Closing time equal to or before opening time is treated as
 * wrapping past midnight (e.g. 14:30 -> 23:30 is same-day; a
 * resource open 22:00 -> 02:00 would wrap, not modelled here
 * since none of the seed resources need it).
 */
export function generateSlotsForDate({
  resource,
  date,
  bookedSlotIds,
  reservedSlotIds,
  disabledSlotIds,
}: GenerateSlotsInput): Slot[] {
  const openMin = timeToMinutes(resource.openingTime);
  let closeMin = timeToMinutes(resource.closingTime);
  if (closeMin <= openMin) closeMin += 24 * 60; // wrap past midnight

  const slots: Slot[] = [];
  const now = new Date();
  const isToday = date === todayKey();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (let start = openMin; start + resource.slotDuration <= closeMin; start += resource.slotDuration) {
    const startTime = minutesToTime(start);
    const endTime = minutesToTime(start + resource.slotDuration);
    const id = buildSlotId(date, resource.id, startTime);

    let status: SlotStatus = "AVAILABLE";
    let reason: string | undefined;

    if (isToday && start <= nowMinutes) {
      status = "PAST";
    } else if (bookedSlotIds.has(id)) {
      status = "BOOKED";
    } else if (reservedSlotIds.has(id)) {
      status = "TEMPORARILY_RESERVED";
    } else if (disabledSlotIds.has(id)) {
      status = "DISABLED";
      reason = disabledSlotIds.get(id);
    }

    slots.push({ id, resourceId: resource.id, date, startTime, endTime, status, reason });
  }

  return slots;
}

/**
 * Given a start and end slot the user clicked (possibly the same slot twice
 * for a single selection), returns the full contiguous range between them
 * IF every slot in that range is currently selectable. Otherwise returns
 * an error describing the first blocking slot.
 */
export function resolveContiguousRange(
  slots: Slot[],
  fromId: string,
  toId: string
): { ok: true; slotIds: string[] } | { ok: false; message: string } {
  const fromIdx = slots.findIndex((s) => s.id === fromId);
  const toIdx = slots.findIndex((s) => s.id === toId);
  if (fromIdx === -1 || toIdx === -1) {
    return { ok: false, message: "Selected slot is no longer available." };
  }
  const start = Math.min(fromIdx, toIdx);
  const end = Math.max(fromIdx, toIdx);
  const range = slots.slice(start, end + 1);

  for (const s of range) {
    if (s.status === "BOOKED") {
      return { ok: false, message: `${formatSlotLabel(s)} is already booked. Please select another time.` };
    }
    if (s.status === "TEMPORARILY_RESERVED") {
      return { ok: false, message: `${formatSlotLabel(s)} is being held by another user right now.` };
    }
    if (s.status === "DISABLED") {
      return { ok: false, message: `${formatSlotLabel(s)} is unavailable${s.reason ? ` (${s.reason})` : ""}.` };
    }
    if (s.status === "PAST") {
      return { ok: false, message: `${formatSlotLabel(s)} has already passed.` };
    }
  }

  return { ok: true, slotIds: range.map((s) => s.id) };
}

function formatSlotLabel(s: Slot) {
  return s.startTime;
}
