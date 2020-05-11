import { Action, createReducer, on } from '@ngrx/store';
import * as BookingActions from './booking.actions';
import { Flight } from '../entities/flight';
import { produce } from 'immer';
import { mutableOn } from 'ngrx-etc';

export const bookingFeatureKey = 'booking';

export interface BookingStateSlice {
  [bookingFeatureKey]: BookingState;
}

export interface BookingState {
  flights: Flight[];
  excludes: number[]; // flight id of flights which should be hidden
  error: string;
}

export const initialState: BookingState = {
  flights: [],
  excludes: [1],
  error: '',
};


const bookingReducer = createReducer(
  initialState,

  mutableOn(BookingActions.loadFlights, (state, action) => {
    // Mutable -- not allowed
    state.flights = [];
  }),

  mutableOn(BookingActions.loadFlightsSuccess, (state, action) => {
    // Mutable -- not allowed
    state.flights = action.flights;
  }),

  mutableOn(BookingActions.loadFlightsError, (state, action) => {
    // Mutable -- not allowed
    // state.flights = [..., ..., ...];
    state.flights = [];
    state.error = '';
  }),


);

export function reducer(state: BookingState | undefined, action: Action) {
  return bookingReducer(state, action);
}
