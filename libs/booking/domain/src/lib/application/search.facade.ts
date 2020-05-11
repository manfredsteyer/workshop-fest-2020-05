import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Flight } from '../entities/flight';
import { FlightDataService } from '../infrastructure/flight.data.service';
import { Store } from '@ngrx/store';
import { loadFlightsSuccess, loadFlights } from '../+state/booking.actions';
import { getAllFlights, getFlights } from '../+state/booking.selectors';
import { BookingStateSlice } from '../+state/booking.reducer';


@Injectable({ providedIn: 'root' })
export class SearchFacade {

    // private flightListSubject = new BehaviorSubject<Flight[]>([]); 
    flightList$ = this.store.select(getFlights);

    constructor(
        private store: Store<BookingStateSlice>,
        // private flightDataService: FlightDataService
        ) {
    }

    load(): void {

        this.store.dispatch(loadFlights({from: '', to: '', urgent: true}));

        // this.flightDataService.load().subscribe(
        //     flights => {
                
        //         // this.flightListSubject.next(flightList)
        //         this.store.dispatch(loadFlightsSuccess({ flights }));

        //     },
        //     err => {
        //         console.error('err', err);
        //     }
        // );
    }

}
