import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  runTransaction,
  setDoc,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "./firebase";
import type { Venue } from "@/types/venue";
import type { Resource, SportCategory } from "@/types/resource";
import type { Booking, SlotLock } from "@/types/booking";
import * as mock from "./mockStore";

export { isFirebaseConfigured };

// ---------------------------------------------------------------------------
// Venues & Resources
// ---------------------------------------------------------------------------

export async function getVenues(): Promise<Venue[]> {
  if (!isFirebaseConfigured || !db) return mock.mockGetVenues();
  const snap = await getDocs(query(collection(db, "venues"), where("active", "==", true)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Venue));
}

export async function getVenue(id: string): Promise<Venue | null> {
  if (!isFirebaseConfigured || !db) return mock.mockGetVenue(id);
  const snap = await getDoc(doc(db, "venues", id));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as Venue) : null;
}

export async function getResources(): Promise<Resource[]> {
  if (!isFirebaseConfigured || !db) return mock.mockGetResources();
  const snap = await getDocs(collection(db, "resources"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Resource));
}

export async function getResourcesByCategory(category: SportCategory): Promise<Resource[]> {
  if (!isFirebaseConfigured || !db) return mock.mockGetResourcesByCategory(category);
  const snap = await getDocs(query(collection(db, "resources"), where("category", "==", category)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Resource));
}

export async function getResource(id: string): Promise<Resource | null> {
  if (!isFirebaseConfigured || !db) return mock.mockGetResource(id);
  const snap = await getDoc(doc(db, "resources", id));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as Resource) : null;
}

// ---------------------------------------------------------------------------
// Availability
// ---------------------------------------------------------------------------

export async function getBookedSlotIds(resourceId: string, date: string): Promise<Set<string>> {
  if (!isFirebaseConfigured || !db) return mock.mockGetBookedSlotIds(resourceId, date);
  const snap = await getDocs(
    query(
      collection(db, "bookings"),
      where("resourceId", "==", resourceId),
      where("date", "==", date)
    )
  );
  const ids = new Set<string>();
  snap.docs.forEach((d) => {
    const b = d.data() as Booking;
    if (b.bookingStatus === "CONFIRMED" || b.bookingStatus === "COMPLETED") {
      b.slotIds.forEach((id) => ids.add(id));
    }
  });
  return ids;
}

export async function getReservedSlotIds(resourceId: string, date: string): Promise<Set<string>> {
  if (!isFirebaseConfigured || !db) return mock.mockGetReservedSlotIds(resourceId, date);
  const snap = await getDocs(
    query(
      collection(db, "slotLocks"),
      where("resourceId", "==", resourceId),
      where("date", "==", date)
    )
  );
  const now = Date.now();
  const ids = new Set<string>();
  snap.docs.forEach((d) => {
    const l = d.data() as SlotLock;
    if (new Date(l.expiresAt).getTime() > now) ids.add(l.id);
  });
  return ids;
}

export async function getDisabledSlotMap(resourceId: string, date: string): Promise<Map<string, string>> {
  if (!isFirebaseConfigured || !db) return mock.mockGetDisabledSlotMap(resourceId, date);
  const snap = await getDocs(
    query(
      collection(db, "blockedSlots"),
      where("resourceId", "==", resourceId),
      where("date", "==", date)
    )
  );
  const map = new Map<string, string>();
  snap.docs.forEach((d) => {
    const b = d.data() as { slotId: string; reason: string };
    map.set(b.slotId, b.reason);
  });
  return map;
}

// ---------------------------------------------------------------------------
// Temporary reservations & booking confirmation (transactional)
// ---------------------------------------------------------------------------

export const RESERVATION_HOLD_MS = 5 * 60 * 1000; // 5 minutes

export async function createReservation(params: {
  userId: string;
  resourceId: string;
  date: string;
  slotIds: string[];
}): Promise<SlotLock[]> {
  if (!isFirebaseConfigured || !db) {
    return mock.mockCreateReservation({ ...params, holdMs: RESERVATION_HOLD_MS });
  }

  const expiresAt = new Date(Date.now() + RESERVATION_HOLD_MS).toISOString();
  const bookingRef = doc(collection(db, "bookings"));

  await runTransaction(db, async (tx) => {
    for (const slotId of params.slotIds) {
      const lockRef = doc(db!, "slotLocks", slotId);
      const lockSnap = await tx.get(lockRef);
      if (lockSnap.exists()) {
        const existing = lockSnap.data() as SlotLock;
        if (new Date(existing.expiresAt).getTime() > Date.now()) {
          throw new mock.SlotConflictError(`Slot ${slotId} is currently held by another user.`);
        }
      }
    }
    for (const slotId of params.slotIds) {
      const lockRef = doc(db!, "slotLocks", slotId);
     tx.set(lockRef, {
  id: slotId,
  resourceId: params.resourceId,
  date: params.date,
  startTime: slotId.split("_").pop() ?? "",
  endTime: "",
  bookingId: bookingRef.id,
  userId: params.userId,
  status: "TEMPORARILY_RESERVED",
  expiresAt,
});
    }
  });

  return params.slotIds.map((id) => ({
    id,
    resourceId: params.resourceId,
    date: params.date,
    startTime: id.split("_").pop() ?? "",
    endTime: "",
    bookingId: bookingRef.id,
    userId: params.userId,
    status: "TEMPORARILY_RESERVED" as const,
    expiresAt,
  }));
}

export async function releaseReservation(slotIds: string[]): Promise<void> {
  if (!isFirebaseConfigured || !db) return mock.mockReleaseReservation(slotIds);
  await Promise.all(
    slotIds.map((id) => updateDoc(doc(db!, "slotLocks", id), { status: "RELEASED" }).catch(() => {}))
  );
}

export async function confirmBooking(booking: Booking): Promise<Booking> {
  if (!isFirebaseConfigured || !db) return mock.mockConfirmBooking(booking);

  const bookedIds = await getBookedSlotIds(booking.resourceId, booking.date);
  const conflict = booking.slotIds.find((id) => bookedIds.has(id));
  if (conflict) {
    throw new mock.SlotConflictError(`Slot ${conflict} was just booked by another user.`);
  }

  await setDoc(doc(db, "bookings", booking.id), {
    ...booking,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  await Promise.all(booking.slotIds.map((id) => updateDoc(doc(db!, "slotLocks", id), { status: "CONVERTED" }).catch(() => {})));

  return booking;
}

// ---------------------------------------------------------------------------
// User bookings
// ---------------------------------------------------------------------------

export async function getUserBookings(userId: string): Promise<Booking[]> {
  if (!isFirebaseConfigured || !db) return mock.mockGetUserBookings(userId);
  const snap = await getDocs(query(collection(db, "bookings"), where("userId", "==", userId)));
  return snap.docs
    .map((d) => d.data() as Booking)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBooking(id: string): Promise<Booking | null> {
  if (!isFirebaseConfigured || !db) return mock.mockGetBooking(id);
  const snap = await getDoc(doc(db, "bookings", id));
  return snap.exists() ? (snap.data() as Booking) : null;
}

export async function getAllBookings(): Promise<Booking[]> {
  if (!isFirebaseConfigured || !db) return mock.mockGetAllBookings();
  const snap = await getDocs(collection(db, "bookings"));
  return snap.docs.map((d) => d.data() as Booking).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function updateBookingStatus(
  id: string,
  bookingStatus: Booking["bookingStatus"],
  paymentStatus?: Booking["paymentStatus"]
): Promise<void> {
  if (!isFirebaseConfigured || !db) return mock.mockUpdateBookingStatus(id, bookingStatus, paymentStatus);
  await updateDoc(doc(db, "bookings", id), {
    bookingStatus,
    ...(paymentStatus ? { paymentStatus } : {}),
    updatedAt: serverTimestamp(),
  });
}

// ---------------------------------------------------------------------------
// Admin: venues, resources, blocked slots
// ---------------------------------------------------------------------------

export async function upsertResource(resource: Resource): Promise<void> {
  if (!isFirebaseConfigured || !db) return mock.mockUpsertResource(resource);
  await setDoc(doc(db, "resources", resource.id), resource);
}

export async function upsertVenue(venue: Venue): Promise<void> {
  if (!isFirebaseConfigured || !db) return mock.mockUpsertVenue(venue);
  await setDoc(doc(db, "venues", venue.id), venue);
}

export async function blockSlots(params: {
  resourceId: string;
  date: string;
  slotIds: string[];
  reason: string;
}): Promise<void> {
  if (!isFirebaseConfigured || !db) return mock.mockBlockSlots(params);
  await Promise.all(
    params.slotIds.map((slotId) =>
      addDoc(collection(db!, "blockedSlots"), {
        resourceId: params.resourceId,
        date: params.date,
        slotId,
        reason: params.reason,
      })
    )
  );
}

export { SlotConflictError } from "./mockStore";
