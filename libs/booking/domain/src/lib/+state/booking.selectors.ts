// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as fromBooking from './booking.reducer';

import { BookingStateSlice, BookingState, bookingFeatureKey } from "./booking.reducer";
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectBookingState = createFeatureSelector<BookingState>(bookingFeatureKey);


export const getAllFlights3 = createSelector(
  selectBookingState,
  bookingState => bookingState.flights
);

export const getAllFlights = (s: BookingStateSlice) => s.booking.flights;

export const getAllFlights2 = createSelector(
  getAllFlights3,
  flights => flights.filter(f => f.id % 2 === 0)
);

export const getFlights = createSelector(
  (s: BookingStateSlice) => s.booking.flights,
  (s: BookingStateSlice) => s.booking.excludes,
  (flights, excludes) => flights.filter(f => !excludes.includes(f.id))
);
