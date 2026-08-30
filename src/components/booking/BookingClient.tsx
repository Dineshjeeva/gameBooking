"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Smartphone,
  ArrowLeft,
  Loader2,
} from "lucide-react";

import type { Resource } from "@/types/resource";
import type { Venue } from "@/types/venue";
import type {
  Slot,
  Booking,
  PaymentMethod,
} from "@/types/booking";

import { DateSelector } from "./DateSelector";

import {
  createReservation,
  getBookedSlotIds,
  getReservedSlotIds,
  getDisabledSlotMap,
  confirmBooking,
} from "@/lib/firestore";

import { generateSlotsForDate } from "@/lib/slots";
import { formatINR, todayKey } from "@/lib/utils";

type Props = {
  resource: Resource;
  venue: Venue;
  initialDate: string;
  initialSlots: Slot[];
};

type PaymentStep = "details" | "payment" | "processing" | "success";

export function BookingClient({
  resource,
  venue,
  initialDate,
  initialSlots,
}: Props) {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [slots, setSlots] = useState<Slot[]>(initialSlots);
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>([]);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("upi");

  const [upiId, setUpiId] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const [loadingSlots, setLoadingSlots] = useState(false);
  const [booking, setBooking] = useState(false);
  const [error, setError] = useState("");

  const [paymentStep, setPaymentStep] =
    useState<PaymentStep>("details");

  const selectedSlots = useMemo(
    () =>
      slots.filter((slot) =>
        selectedSlotIds.includes(slot.id)
      ),
    [slots, selectedSlotIds]
  );

  const pricePerSlot = Number(resource.pricePerSlot || 0);

  const total = selectedSlots.length * pricePerSlot;

  async function changeDate(date: string) {
    setSelectedDate(date);
    setSelectedSlotIds([]);
    setError("");
    setLoadingSlots(true);

    try {
      const [booked, reserved, disabled] =
        await Promise.all([
          getBookedSlotIds(resource.id, date),
          getReservedSlotIds(resource.id, date),
          getDisabledSlotMap(resource.id, date),
        ]);

      const newSlots = generateSlotsForDate({
        resource,
        date,
        bookedSlotIds: booked,
        reservedSlotIds: reserved,
        disabledSlotIds: disabled,
      });

      setSlots(newSlots);
    } catch (err) {
      console.error(err);
      setError("Unable to load slots for this date.");
    } finally {
      setLoadingSlots(false);
    }
  }

  function toggleSlot(slot: Slot) {
    if (slot.status !== "AVAILABLE") return;

    setSelectedSlotIds((current) => {
      if (current.includes(slot.id)) {
        return current.filter((id) => id !== slot.id);
      }

      return [...current, slot.id];
    });
  }

  function validateCustomerDetails() {
    if (selectedSlotIds.length === 0) {
      setError("Please select at least one slot.");
      return false;
    }

    if (!customerName.trim()) {
      setError("Please enter your name.");
      return false;
    }

    if (!customerPhone.trim()) {
      setError("Please enter your phone number.");
      return false;
    }

    if (!customerEmail.trim()) {
      setError("Please enter your email.");
      return false;
    }

    return true;
  }

  function proceedToPayment() {
    setError("");

    if (!validateCustomerDetails()) return;

    setPaymentStep("payment");
  }

  function validatePayment() {
    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        setError("Please enter a UPI ID.");
        return false;
      }

      if (!upiId.includes("@")) {
        setError("Please enter a valid sample UPI ID.");
        return false;
      }
    }

    if (paymentMethod === "card") {
      if (!cardNumber.trim()) {
        setError("Please enter card number.");
        return false;
      }

      if (!cardExpiry.trim()) {
        setError("Please enter card expiry.");
        return false;
      }

      if (!cardCvv.trim()) {
        setError("Please enter CVV.");
        return false;
      }

      if (!cardName.trim()) {
        setError("Please enter cardholder name.");
        return false;
      }

      if (cardNumber.replace(/\s/g, "").length < 16) {
        setError("Please enter a valid 16 digit sample card.");
        return false;
      }

      if (cardCvv.length < 3) {
        setError("Please enter a valid CVV.");
        return false;
      }
    }

    return true;
  }

  async function processPayment() {
    setError("");

    if (!validatePayment()) return;

    setBooking(true);
    setPaymentStep("processing");

    try {
      /*
       * Dummy authenticated user.
       * Replace with Firebase Auth user.uid later.
       */
      const userId = "guest";

      /*
       * Hold selected slots for 5 minutes.
       */
      const locks = await createReservation({
        userId,
        resourceId: resource.id,
        date: selectedDate,
        slotIds: selectedSlotIds,
      });

      const bookingId = locks[0]?.bookingId;

      if (!bookingId) {
        throw new Error("Unable to create booking.");
      }

      /*
       * Fake payment processing.
       *
       * This does NOT charge real money.
       * It only simulates a payment gateway.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      const bookingDate = new Date().toISOString();

      const bookingData: Booking = {
        id: bookingId,

        userId,

        venueId: venue.id,
        venueName: venue.name,

        resourceId: resource.id,
        resourceName: resource.name,

        category: String(resource.category),

        date: selectedDate,

        startTime:
          selectedSlots[0]?.startTime ?? "",

        endTime:
          selectedSlots[selectedSlots.length - 1]
            ?.endTime ?? "",

        slotIds: selectedSlotIds,

        duration:
          selectedSlotIds.length *
          Number(resource.slotDuration || 0),

        subtotal: total,
        tax: 0,
        convenienceFee: 0,
        total,

        /*
         * Dummy payment is successful.
         */
        paymentStatus: "PAID",

        paymentMethod,

        bookingStatus: "CONFIRMED",

        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerEmail: customerEmail.trim(),

        notes: notes.trim(),

        createdAt: bookingDate,
        updatedAt: bookingDate,
      };

      /*
       * Save booking to Firebase.
       */
      await confirmBooking(bookingData);

      setPaymentStep("success");

      /*
       * Give the success screen a moment to display.
       */
      setTimeout(() => {
        router.push(
          `/booking/success?id=${bookingId}`
        );
      }, 1200);
    } catch (err) {
      console.error(err);

      setPaymentStep("payment");

      if (
        err instanceof Error &&
        err.message.includes("currently held")
      ) {
        setError(
          "One of the selected slots is currently reserved. Please select another slot."
        );
      } else {
        setError(
          "Payment failed or booking could not be completed. Please try again."
        );
      }
    } finally {
      setBooking(false);
    }
  }

  /*
   * Payment success screen
   */
  if (paymentStep === "success") {
    return (
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />

        <h2 className="mt-5 text-2xl font-bold text-ink">
          Payment successful
        </h2>

        <p className="mt-2 text-sm text-muted">
          Your booking has been confirmed successfully.
        </p>

        <div className="mt-6 rounded-xl bg-bg p-4 text-left">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-muted">
              Venue
            </span>

            <span className="font-semibold text-ink">
              {resource.name}
            </span>
          </div>

          <div className="mt-2 flex justify-between gap-4 text-sm">
            <span className="text-muted">
              Date
            </span>

            <span className="font-semibold text-ink">
              {selectedDate}
            </span>
          </div>

          <div className="mt-2 flex justify-between gap-4 text-sm">
            <span className="text-muted">
              Slots
            </span>

            <span className="font-semibold text-ink">
              {selectedSlotIds.length}
            </span>
          </div>

          <div className="mt-3 flex justify-between border-t border-border pt-3">
            <span className="font-semibold text-ink">
              Paid
            </span>

            <span className="font-bold text-primary">
              {formatINR(total)}
            </span>
          </div>
        </div>

        <p className="mt-5 text-xs text-muted">
          Redirecting to your booking confirmation...
        </p>
      </div>
    );
  }

  /*
   * Payment screen
   */
  if (
    paymentStep === "payment" ||
    paymentStep === "processing"
  ) {
    return (
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <button
            type="button"
            disabled={booking}
            onClick={() => {
              setError("");
              setPaymentStep("details");
            }}
            className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to booking
          </button>

          <div>
            <h2 className="text-2xl font-bold text-ink">
              Payment
            </h2>

            <p className="mt-1 text-sm text-muted">
              Complete your sample payment to confirm
              your booking.
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-bg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">
                {resource.name}
              </span>

              <span className="text-lg font-bold text-primary">
                {formatINR(total)}
              </span>
            </div>

            <p className="mt-1 text-xs text-muted">
              {selectedSlotIds.length} slot
              {selectedSlotIds.length === 1
                ? ""
                : "s"} • {selectedDate}
            </p>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-ink">
              Select payment method
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                disabled={booking}
                onClick={() => {
                  setPaymentMethod("upi");
                  setError("");
                }}
                className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${
                  paymentMethod === "upi"
                    ? "border-primary bg-primary-light"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <Smartphone className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-sm font-semibold text-ink">
                    UPI
                  </p>

                  <p className="text-xs text-muted">
                    Google Pay, PhonePe, Paytm
                  </p>
                </div>
              </button>

              <button
                type="button"
                disabled={booking}
                onClick={() => {
                  setPaymentMethod("card");
                  setError("");
                }}
                className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${
                  paymentMethod === "card"
                    ? "border-primary bg-primary-light"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <CreditCard className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-sm font-semibold text-ink">
                    Card
                  </p>

                  <p className="text-xs text-muted">
                    Credit or debit card
                  </p>
                </div>
              </button>
            </div>
          </div>

          {paymentMethod === "upi" && (
            <div className="mt-6">
              <label className="text-sm font-medium text-ink">
                UPI ID
              </label>

              <input
                value={upiId}
                onChange={(e) =>
                  setUpiId(e.target.value)
                }
                disabled={booking}
                placeholder="example@upi"
                className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />

              <p className="mt-2 text-xs text-muted">
                Sample only. No real payment will be
                processed.
              </p>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-ink">
                  Card number
                </label>

                <input
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(e.target.value)
                  }
                  disabled={booking}
                  inputMode="numeric"
                  maxLength={19}
                  placeholder="4242 4242 4242 4242"
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-ink">
                    Expiry
                  </label>

                  <input
                    value={cardExpiry}
                    onChange={(e) =>
                      setCardExpiry(e.target.value)
                    }
                    disabled={booking}
                    placeholder="12/30"
                    maxLength={5}
                    className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink">
                    CVV
                  </label>

                  <input
                    value={cardCvv}
                    onChange={(e) =>
                      setCardCvv(e.target.value)
                    }
                    disabled={booking}
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="123"
                    className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-ink">
                  Cardholder name
                </label>

                <input
                  value={cardName}
                  onChange={(e) =>
                    setCardName(e.target.value)
                  }
                  disabled={booking}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <p className="text-xs text-muted">
                Sample card:
                4242 4242 4242 4242
              </p>
            </div>
          )}

          {error && (
            <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="button"
            disabled={booking}
            onClick={processPayment}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {booking ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing payment...
              </>
            ) : (
              `Pay ${formatINR(total)}`
            )}
          </button>

          <p className="mt-4 text-center text-xs text-muted">
            🔒 Demo payment — no real money will be
            charged.
          </p>
        </div>
      </div>
    );
  }

  /*
   * Normal booking/details screen
   */
  return (
    <div className="w-full">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:items-start">
        {/* LEFT */}
        <section className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-5">
          <DateSelector
            selectedDate={selectedDate}
            onSelect={changeDate}
          />

          <div className="mt-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />

              <h2 className="text-base font-semibold text-ink">
                Available slots
              </h2>
            </div>

            {loadingSlots ? (
              <div className="py-10 text-center text-sm text-muted">
                Loading slots...
              </div>
            ) : slots.length === 0 ? (
              <div className="rounded-xl bg-bg px-4 py-10 text-center text-sm text-muted">
                No slots available.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 xl:grid-cols-5">
                {slots.map((slot) => {
                  const selected =
                    selectedSlotIds.includes(slot.id);

                  let className =
                    "min-w-0 rounded-xl border px-2 py-3 text-center text-sm transition";

                  if (selected) {
                    className +=
                      " border-primary bg-primary text-white";
                  } else if (
                    slot.status === "AVAILABLE"
                  ) {
                    className +=
                      " border-border bg-card text-ink hover:border-primary hover:bg-primary-light";
                  } else if (
                    slot.status === "BOOKED"
                  ) {
                    className +=
                      " cursor-not-allowed border-border bg-gray-100 text-gray-400";
                  } else if (
                    slot.status ===
                    "TEMPORARILY_RESERVED"
                  ) {
                    className +=
                      " cursor-not-allowed border-border bg-yellow-50 text-yellow-600";
                  } else {
                    className +=
                      " cursor-not-allowed border-border bg-gray-100 text-gray-400";
                  }

                  return (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={
                        slot.status !== "AVAILABLE"
                      }
                      onClick={() =>
                        toggleSlot(slot)
                      }
                      className={className}
                    >
                      <div className="truncate font-semibold">
                        {slot.startTime}
                      </div>

                      <div className="mt-1 truncate text-xs opacity-75">
                        {slot.endTime}
                      </div>

                      {selected && (
                        <CheckCircle2 className="mx-auto mt-1 h-4 w-4" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* RIGHT */}
        <aside className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-5 lg:sticky lg:top-6">
          <h2 className="text-lg font-bold text-ink">
            Booking details
          </h2>

          <div className="mt-4 rounded-xl bg-bg p-4">
            <p className="break-words text-sm font-semibold text-ink">
              {resource.name}
            </p>

            <p className="mt-1 break-words text-xs text-muted">
              {venue.name}
            </p>

            <p className="mt-1 text-xs text-muted">
              {selectedSlotIds.length} slot
              {selectedSlotIds.length === 1
                ? ""
                : "s"} selected
            </p>

            {selectedSlots.length > 0 && (
              <div className="mt-3 space-y-2">
                {selectedSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex min-w-0 items-center justify-between gap-3 text-xs text-muted"
                  >
                    <span className="truncate">
                      {slot.startTime} –{" "}
                      {slot.endTime}
                    </span>

                    <span className="shrink-0 font-medium">
                      {formatINR(pricePerSlot)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
              <span className="text-sm font-semibold text-ink">
                Total
              </span>

              <span className="shrink-0 text-lg font-bold text-primary">
                {formatINR(total)}
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <input
              value={customerName}
              onChange={(e) =>
                setCustomerName(e.target.value)
              }
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />

            <input
              value={customerPhone}
              onChange={(e) =>
                setCustomerPhone(e.target.value)
              }
              placeholder="Phone number"
              type="tel"
              className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />

            <input
              value={customerEmail}
              onChange={(e) =>
                setCustomerEmail(e.target.value)
              }
              placeholder="Email"
              type="email"
              className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />

            <textarea
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              placeholder="Notes (optional)"
              rows={3}
              className="w-full resize-none rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          {error && (
            <p className="mt-4 rounded-xl bg-red-50 px-3 py-2.5 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="button"
            disabled={selectedSlotIds.length === 0}
            onClick={proceedToPayment}
            className="mt-5 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            Proceed to payment
          </button>
        </aside>
      </div>
    </div>
  );
}