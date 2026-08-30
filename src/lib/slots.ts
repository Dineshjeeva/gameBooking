import type { Resource } from "@/types/resource";
import type { Slot, SlotStatus } from "@/types/booking";
import { minutesToTime, timeToMinutes, todayKey } from "./utils";

export function buildSlotId(
  date: string,
  resourceId: string,
  startTime: string
) {
  return `${date}_${resourceId}_${startTime}`;
}

interface GenerateSlotsInput {
  resource: Resource;
  date: string;
  bookedSlotIds: Set<string>;
  reservedSlotIds: Set<string>;
  disabledSlotIds: Map<string, string>;
}

export function generateSlotsForDate({
  resource,
  date,
  bookedSlotIds,
  reservedSlotIds,
  disabledSlotIds,
}: GenerateSlotsInput): Slot[] {
  /*
   * Firebase currently stores these values as strings.
   * Convert them to numbers here.
   */
  const slotDuration = Number(resource.slotDuration);

  const openMin = timeToMinutes(String(resource.openingTime));
  let closeMin = timeToMinutes(String(resource.closingTime));

  if (!slotDuration || slotDuration <= 0) {
    console.error("Invalid slotDuration:", resource.slotDuration);
    return [];
  }

  if (closeMin <= openMin) {
    closeMin += 24 * 60;
  }

  const slots: Slot[] = [];

  const now = new Date();
  const isToday = date === todayKey();

  const nowMinutes =
    now.getHours() * 60 + now.getMinutes();

  for (
    let start = openMin;
    start + slotDuration <= closeMin;
    start += slotDuration
  ) {
    const startTime = minutesToTime(start);
    const endTime = minutesToTime(start + slotDuration);

    const id = buildSlotId(
      date,
      resource.id,
      startTime
    );

    let status: SlotStatus = "AVAILABLE";
    let reason: string | undefined;

    /*
     * Only today's slots can be PAST.
     */
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

    slots.push({
      id,
      resourceId: resource.id,
      date,
      startTime,
      endTime,
      status,
      reason,
    });
  }

  console.log("GENERATED SLOTS:", {
    resource: resource.name,
    date,
    openingTime: resource.openingTime,
    closingTime: resource.closingTime,
    slotDuration: resource.slotDuration,
    totalSlots: slots.length,
    availableSlots: slots.filter(
      (slot) => slot.status === "AVAILABLE"
    ).length,
    slots,
  });

  return slots;
}

export function resolveContiguousRange(
  slots: Slot[],
  fromId: string,
  toId: string
):
  | { ok: true; slotIds: string[] }
  | { ok: false; message: string } {
  const fromIdx = slots.findIndex(
    (s) => s.id === fromId
  );

  const toIdx = slots.findIndex(
    (s) => s.id === toId
  );

  if (fromIdx === -1 || toIdx === -1) {
    return {
      ok: false,
      message: "Selected slot is no longer available.",
    };
  }

  const start = Math.min(fromIdx, toIdx);
  const end = Math.max(fromIdx, toIdx);

  const range = slots.slice(start, end + 1);

  for (const s of range) {
    if (s.status === "BOOKED") {
      return {
        ok: false,
        message: `${formatSlotLabel(
          s
        )} is already booked. Please select another time.`,
      };
    }

    if (s.status === "TEMPORARILY_RESERVED") {
      return {
        ok: false,
        message: `${formatSlotLabel(
          s
        )} is being held by another user right now.`,
      };
    }

    if (s.status === "DISABLED") {
      return {
        ok: false,
        message: `${formatSlotLabel(
          s
        )} is unavailable${
          s.reason ? ` (${s.reason})` : ""
        }.`,
      };
    }

    if (s.status === "PAST") {
      return {
        ok: false,
        message: `${formatSlotLabel(
          s
        )} has already passed.`,
      };
    }
  }

  return {
    ok: true,
    slotIds: range.map((s) => s.id),
  };
}

function formatSlotLabel(s: Slot) {
  return s.startTime;
}
