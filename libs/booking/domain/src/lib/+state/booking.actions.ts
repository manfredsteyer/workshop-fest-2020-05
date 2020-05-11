import { createAction, props } from '@ngrx/store';
import { Flight } from '../entities/flight';

export const loadFlights = createAction(
  '[Booking] loadFlights',
  props<{from: string, to: string, urgent: boolean}>()
);

export const loadFlightsSuccess = createAction(
  '[Booking] loadFlightsSuccess',
  props<{flights: Flight[]}>()
);

export const loadFlightsError = createAction(
  '[Booking] loadFlightsError',
  props<{message: string}>()
);




