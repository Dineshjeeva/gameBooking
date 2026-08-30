export type SportCategory = "turf" | "badminton" | "playstation" | "cricket";

export const SPORT_CATEGORIES: {
  id: SportCategory;
  label: string;
  description: string;
}[] = [
  { id: "turf", label: "Turf", description: "5-a-side football & multisport turf" },
  { id: "badminton", label: "Badminton", description: "Indoor wooden & synthetic courts" },
  { id: "playstation", label: "PlayStation", description: "PS5 consoles, latest titles" },
  { id: "cricket", label: "Cricket", description: "Full-size cricket ground" },
];

export interface Resource {
  id: string;
  venueId: string;
  name: string;
  category: SportCategory;
  type: string;
  description: string;
  image: string;
  pricePerSlot: number;
  slotDuration: number; // minutes
  openingTime: string; // "HH:mm" 24hr
  closingTime: string; // "HH:mm" 24hr, may be "24:00" or wrap past midnight
  active: boolean;
  amenities: string[];
}
