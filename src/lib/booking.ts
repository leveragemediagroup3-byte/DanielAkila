// Lets any part of the site open the booking modal.
export const BOOKING_EVENT = 'open-booking'

export function openBooking(type?: string) {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT, { detail: type ?? null }))
}