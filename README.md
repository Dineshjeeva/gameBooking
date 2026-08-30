# Playzo — Sports & Gaming Venue Booking App

Playzo is a Next.js (App Router) + TypeScript + Tailwind CSS booking platform for
turf, badminton, PlayStation, and cricket venues, with a Firebase-ready data layer.

## ⚠️ Current build status

This is an **in-progress scaffold**, not the complete spec yet. Built and verified
(TypeScript clean, ESLint clean, `next build` succeeds):

- Design system / Tailwind theme (Playzo green palette, tokens in `globals.css`)
- Full type system (`src/types/*`)
- Data layer: `src/lib/firestore.ts` — real Firestore when Firebase env vars are
  set, otherwise falls back automatically to a working localStorage/in-memory
  mock store (`src/lib/mockStore.ts`) seeded with the venue + 9 resources from
  the spec, so the app runs immediately with `npm install && npm run dev`
- Dynamic slot generation (`src/lib/slots.ts`) — never hardcoded, derived from
  each resource's opening/closing time + slot duration; includes contiguous
  range selection with "slot already booked" style error messages
- Pricing engine (`src/lib/pricing.ts`) — subtotal/tax/convenience fee/total
- Auth context (`src/lib/auth.tsx`) — real Firebase Auth or mock session
  fallback, with seeded admin: `admin@playzo.app` / `admin123`
- Booking-draft context to pass slot selections between routes
- Navbar, Footer, Toast notifications, skeleton loaders, empty states
- Pages: **Home**, **/sports**, **/sports/[sport]** (with live "available
  today" slot counts per venue, computed from the mock store)
- Booking-page components started: `BookingHeader`, `DateSelector` (30-day
  pre-booking window, configurable in `src/lib/config.ts`), `BookingLegend`

### Not yet built
- `/booking/[resourceId]` page itself (slot grid + timeline + summary wiring)
- `/checkout`, `/booking/success/[bookingId]`
- `/bookings`, `/bookings/[bookingId]`
- `/login`, `/signup`
- `/admin` and sub-routes
- `scripts/seed.ts` for a real Firestore project

Ask your assistant to continue the build — the data layer, types, and slot
logic these remaining pages need already exist and are wired up.

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:3000` immediately using the local mock data layer —
no Firebase project required.

## Connecting real Firebase (optional)

1. Create a Firebase project, enable **Authentication (Email/Password)** and
   **Firestore**.
2. Fill in `.env.local` with your web app config (`NEXT_PUBLIC_FIREBASE_*`).
3. Restart the dev server. `src/lib/firebase.ts` detects the env vars and
   `src/lib/firestore.ts` / `src/lib/auth.tsx` automatically switch from the
   mock store to real Firestore/Auth calls — no code changes needed.
4. You'll need to seed `venues` / `resources` collections yourself for now
   (mirror the shape in `src/lib/seedData.ts`) since `scripts/seed.ts` hasn't
   been written yet.

## Project structure

```
src/
  app/            Next.js App Router routes
  components/      layout/ home/ sports/ booking/ ui/
  lib/             firebase.ts firestore.ts mockStore.ts auth.tsx
                   slots.ts pricing.ts bookingDraft.tsx utils.ts config.ts
  types/           venue.ts resource.ts booking.ts user.ts
```
