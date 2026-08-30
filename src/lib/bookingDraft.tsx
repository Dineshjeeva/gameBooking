"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface BookingDraft {
  resourceId: string;
  resourceName: string;
  venueId: string;
  venueName: string;
  category: string;
  date: string;
  slotIds: string[];
  startTime: string;
  endTime: string;
  pricePerSlot: string;
}

interface BookingDraftContextValue {
  draft: BookingDraft | null;
  setDraft: (d: BookingDraft | null) => void;
}

const BookingDraftContext = createContext<BookingDraftContextValue | null>(null);
const STORAGE_KEY = "playzo_booking_draft";

export function BookingDraftProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<BookingDraft | null>(null);

  useEffect(() => {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        Promise.resolve().then(() => setDraftState(parsed));
      } catch {
        // ignore corrupt draft
      }
    }
  }, []);

  function setDraft(d: BookingDraft | null) {
    setDraftState(d);
    if (d) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(d));
    else window.sessionStorage.removeItem(STORAGE_KEY);
  }

  return (
    <BookingDraftContext.Provider value={{ draft, setDraft }}>
      {children}
    </BookingDraftContext.Provider>
  );
}

export function useBookingDraft() {
  const ctx = useContext(BookingDraftContext);
  if (!ctx) throw new Error("useBookingDraft must be used within BookingDraftProvider");
  return ctx;
}
