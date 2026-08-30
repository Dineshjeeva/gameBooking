import type { PriceBreakdown } from "@/types/booking";

const TAX_RATE = 0.05; // 5% GST-style tax, configurable
const CONVENIENCE_FEE = 10; // flat fee, configurable

export function calculatePrice(pricePerSlot: number, numSlots: number): PriceBreakdown {
  const subtotal = pricePerSlot * numSlots;
  const tax = Math.round(subtotal * TAX_RATE);
  const convenienceFee = numSlots > 0 ? CONVENIENCE_FEE : 0;
  const total = subtotal + tax + convenienceFee;
  return { subtotal, tax, convenienceFee, total };
}

export const PRICING_CONFIG = { TAX_RATE, CONVENIENCE_FEE };
