import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, switchMap, map } from 'rxjs/operators';
import { EMPTY, timer, interval } from 'rxjs';

import * as BookingActions from './booking.actions';
import { FlightDataService } from '../infrastructure/flight.data.service';


@Injectable()
export class BookingEffects {

  loadBookings$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(BookingActions.loadFlights),
      switchMap(a => this.flightDataService.load()),
      map(flights => BookingActions.loadFlightsSuccess({flights}))
    );
  });


  // otherEffect$ = createEffect(() => {
  //     return interval(2000).pipe(
  //       map(_ => BookingActions.loadFlightsError({message: 'Manfred was here!'}))
  //     )
  // });

  constructor(private actions$: Actions, private flightDataService: FlightDataService) {}

}
