import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** YYYY-MM-DD for a Date, in local time (not UTC), to avoid off-by-one dates. */
export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function todayKey(): string {
  return toDateKey(new Date());
}

export function addDaysKey(dateKey: string, days: number): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return toDateKey(dt);
}

export function isPastDateKey(dateKey: string): boolean {
  return dateKey < todayKey();
}

export function formatDateKeyLong(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateKeyShort(dateKey: string): { day: string; weekday: string; month: string } {
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return {
    day: String(dt.getDate()),
    weekday: dt.toLocaleDateString("en-IN", { weekday: "short" }).toUpperCase(),
    month: dt.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
  };
}

export function formatMonthYear(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

/** "18:30" -> "6:30 PM" */
export function formatTime12h(time24: string): string {
  const [hStr, mStr] = time24.split(":");
  let h = Number(hStr) % 24;
  const m = Number(mStr);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function timeToMinutes(time24: string): number {
  const [h, m] = time24.split(":").map(Number);
  return h * 60 + m;
}

export function minutesToTime(mins: number): string {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function generateId(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export function generateBookingId(date = new Date()): string {
  const year = date.getFullYear();
  const num = Math.floor(100000 + Math.random() * 899999);
  return `PZ-${year}-${num}`;
}

export function isValidPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone.trim());
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
