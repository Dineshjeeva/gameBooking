import type { Venue } from "@/types/venue";
import type { Resource, SportCategory } from "@/types/resource";
import type { Booking, SlotLock } from "@/types/booking";
import type { AppUser } from "@/types/user";
import { SEED_VENUE, SEED_RESOURCES, buildSeedBookings } from "./seedData";
import { todayKey } from "./utils";

interface StoreShape {
  venues: Venue[];
  resources: Resource[];
  bookings: Booking[];
  locks: SlotLock[];
  disabledSlots: { id: string; resourceId: string; date: string; slotId: string; reason: string }[];
  users: (AppUser & { password: string })[];
}

const STORAGE_KEY = "playzo_mock_store_v1";

function seedStore(): StoreShape {
  return {
    venues: [SEED_VENUE],
    resources: SEED_RESOURCES,
    bookings: buildSeedBookings(todayKey()),
    locks: [],
    disabledSlots: [],
    users: [
      {
        id: "admin_seed",
        name: "Playzo Admin",
        email: "admin@playzo.app",
        phone: "9999999999",
        role: "admin",
        createdAt: new Date().toISOString(),
        password: "admin123",
      },
    ],
  };
}

let memoryStore: StoreShape | null = null;

function load(): StoreShape {
  if (typeof window === "undefined") {
    if (!memoryStore) memoryStore = seedStore();
    return memoryStore;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as StoreShape;
  } catch {
    // fall through to reseed
  }
  const fresh = seedStore();
  save(fresh);
  return fresh;
}

function save(store: StoreShape) {
  if (typeof window === "undefined") {
    memoryStore = store;
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function delay<T>(value: T, ms = 220): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// ---------- Venues & Resources ----------

export async function mockGetVenues(): Promise<Venue[]> {
  return delay(load().venues.filter((v) => v.active));
}

export async function mockGetVenue(id: string): Promise<Venue | null> {
  return delay(load().venues.find((v) => v.id === id) ?? null);
}

export async function mockGetResources(): Promise<Resource[]> {
  return delay(load().resources);
}

export async function mockGetResourcesByCategory(category: SportCategory): Promise<Resource[]> {
  return delay(load().resources.filter((r) => r.category === category));
}

export async function mockGetResource(id: string): Promise<Resource | null> {
  return delay(load().resources.find((r) => r.id === id) ?? null);
}

// ---------- Availability ----------

function pruneExpiredLocks(store: StoreShape) {
  const now = Date.now();
  const before = store.locks.length;
  store.locks = store.locks.filter((l) => new Date(l.expiresAt).getTime() > now);
  if (store.locks.length !== before) save(store);
}

export async function mockGetBookedSlotIds(resourceId: string, date: string): Promise<Set<string>> {
  const store = load();
  const ids = new Set<string>();
  for (const b of store.bookings) {
    if (
      b.resourceId === resourceId &&
      b.date === date &&
      (b.bookingStatus === "CONFIRMED" || b.bookingStatus === "COMPLETED")
    ) {
      b.slotIds.forEach((id) => ids.add(id));
    }
  }
  return delay(ids, 120);
}

export async function mockGetReservedSlotIds(resourceId: string, date: string): Promise<Set<string>> {
  const store = load();
  pruneExpiredLocks(store);
  const ids = new Set<string>();
  for (const l of store.locks) {
    if (l.resourceId === resourceId && l.date === date) ids.add(l.id);
  }
  return delay(ids, 80);
}

export async function mockGetDisabledSlotMap(resourceId: string, date: string): Promise<Map<string, string>> {
  const store = load();
  const map = new Map<string, string>();
  for (const d of store.disabledSlots) {
    if (d.resourceId === resourceId && d.date === date) map.set(d.slotId, d.reason);
  }
  return delay(map, 80);
}

// ---------- Reservations & Bookings ----------

export class SlotConflictError extends Error {}

export async function mockCreateReservation(params: {
  userId: string;
  resourceId: string;
  date: string;
  slotIds: string[];
  holdMs: number;
}): Promise<SlotLock[]> {
  const store = load();
  pruneExpiredLocks(store);

  const bookedIds = await mockGetBookedSlotIds(params.resourceId, params.date);
  const conflict = params.slotIds.find(
    (id) => bookedIds.has(id) || store.locks.some((l) => l.id === id)
  );
  if (conflict) {
    throw new SlotConflictError(`Slot ${conflict} was just booked by another user.`);
  }

  const expiresAt = new Date(Date.now() + params.holdMs).toISOString();
  const bookingId = `hold_${Date.now()}`;
  const newLocks: SlotLock[] = params.slotIds.map((slotId) => ({
    id: slotId,
    resourceId: params.resourceId,
    date: params.date,
    startTime: slotId.split("_").pop() ?? "",
    endTime: "",
    bookingId,
    userId: params.userId,
    status: "TEMPORARILY_RESERVED",
    expiresAt,
  }));
  store.locks.push(...newLocks);
  save(store);
  return delay(newLocks, 300);
}

export async function mockReleaseReservation(slotIds: string[]): Promise<void> {
  const store = load();
  store.locks = store.locks.filter((l) => !slotIds.includes(l.id));
  save(store);
  return delay(undefined, 60);
}

export async function mockConfirmBooking(booking: Booking): Promise<Booking> {
  const store = load();

  // Re-validate: none of the slots may already be confirmed-booked by someone else.
  const bookedIds = await mockGetBookedSlotIds(booking.resourceId, booking.date);
  const conflict = booking.slotIds.find((id) => bookedIds.has(id));
  if (conflict) {
    throw new SlotConflictError(`Slot ${conflict} was just booked by another user.`);
  }

  store.bookings.push(booking);
  store.locks = store.locks.filter((l) => !booking.slotIds.includes(l.id));
  save(store);
  return delay(booking, 200);
}

export async function mockGetUserBookings(userId: string): Promise<Booking[]> {
  const store = load();
  return delay(
    store.bookings.filter((b) => b.userId === userId).sort((a, b) => (a.date < b.date ? 1 : -1))
  );
}

export async function mockGetBooking(id: string): Promise<Booking | null> {
  return delay(load().bookings.find((b) => b.id === id) ?? null);
}

export async function mockGetAllBookings(): Promise<Booking[]> {
  return delay([...load().bookings].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
}

export async function mockUpdateBookingStatus(
  id: string,
  bookingStatus: Booking["bookingStatus"],
  paymentStatus?: Booking["paymentStatus"]
): Promise<void> {
  const store = load();
  const b = store.bookings.find((x) => x.id === id);
  if (b) {
    b.bookingStatus = bookingStatus;
    if (paymentStatus) b.paymentStatus = paymentStatus;
    b.updatedAt = new Date().toISOString();
    save(store);
  }
  return delay(undefined, 150);
}

// ---------- Admin: resources & venues ----------

export async function mockUpsertResource(resource: Resource): Promise<void> {
  const store = load();
  const idx = store.resources.findIndex((r) => r.id === resource.id);
  if (idx >= 0) store.resources[idx] = resource;
  else store.resources.push(resource);
  save(store);
  return delay(undefined, 150);
}

export async function mockUpsertVenue(venue: Venue): Promise<void> {
  const store = load();
  const idx = store.venues.findIndex((v) => v.id === venue.id);
  if (idx >= 0) store.venues[idx] = venue;
  else store.venues.push(venue);
  save(store);
  return delay(undefined, 150);
}

export async function mockBlockSlots(params: {
  resourceId: string;
  date: string;
  slotIds: string[];
  reason: string;
}): Promise<void> {
  const store = load();
  for (const slotId of params.slotIds) {
    store.disabledSlots.push({
      id: `block_${slotId}`,
      resourceId: params.resourceId,
      date: params.date,
      slotId,
      reason: params.reason,
    });
  }
  save(store);
  return delay(undefined, 150);
}

export async function mockUnblockSlot(slotId: string): Promise<void> {
  const store = load();
  store.disabledSlots = store.disabledSlots.filter((d) => d.slotId !== slotId);
  save(store);
  return delay(undefined, 100);
}

// ---------- Users (mock auth-backed profile store) ----------

export async function mockFindUserByEmail(email: string) {
  return load().users.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function mockCreateUser(user: AppUser & { password: string }) {
  const store = load();
  store.users.push(user);
  save(store);
  return delay(user, 150);
}

export async function mockGetUserById(id: string): Promise<AppUser | null> {
  const u = load().users.find((x) => x.id === id);
  if (!u) return null;
  const rest: AppUser = {
    id: u.id,
    name: u.name,
    email: u.email,
    phone: u.phone,
    role: u.role,
    createdAt: u.createdAt,
  };
  return delay(rest, 60);
}
