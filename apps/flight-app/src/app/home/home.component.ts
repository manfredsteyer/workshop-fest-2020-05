import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { loadFlightsError } from 'libs/booking/domain/src/lib/+state/booking.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  expertMode = false;
  needsLogin = false;
  _userName = '';

  get userName(): string {
    return this._userName;
  }

  constructor(
    private actions$: Actions,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.actions$.pipe(ofType(loadFlightsError)).subscribe(
      err => console.debug('err', err)
    );


    this.needsLogin = !!this.route.snapshot.params['needsLogin'];
  }


  changed($event): void {
    console.debug('$event.detail ', $event.target.detail);

    this.expertMode = $event.detail
  }


  login(): void {
    this._userName = 'Login will be implemented in another exercise!'
  }

  logout(): void {
    this._userName = '';
  }


}
