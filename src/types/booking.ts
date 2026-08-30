export type SlotStatus =
  | "AVAILABLE"
  | "SELECTED"
  | "BOOKED"
  | "DISABLED"
  | "PAST"
  | "TEMPORARILY_RESERVED";

export interface Slot {
  id: string; // deterministic: `${date}_${resourceId}_${startTime}`
  resourceId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  status: SlotStatus;
  reason?: string; // for DISABLED (e.g. "Maintenance")
}

export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";
export type BookingStatus =
  | "PENDING_PAYMENT"
  | "CONFIRMED"
  | "CANCELLED"
  | "COMPLETED";
export type PaymentMethod = "upi" | "card" | "cash";

export interface PriceBreakdown {
  subtotal: number;
  tax: number;
  convenienceFee: number;
  total: number;
}

export interface Booking {
  id: string; // e.g. PZ-2026-000123
  userId: string;
  venueId: string;
  venueName: string;
  resourceId: string;
  resourceName: string;
  category: string;
  date: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  slotIds: string[];
  duration: number; // minutes
  subtotal: number;
  tax: number;
  convenienceFee: number;
  total: number;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  bookingStatus: BookingStatus;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SlotLock {
  id: string; // same as slot id
  resourceId: string;
  date: string;
  startTime: string;
  endTime: string;
  bookingId: string;
  userId: string;
  status: "TEMPORARILY_RESERVED";
  expiresAt: string; // ISO timestamp
}
