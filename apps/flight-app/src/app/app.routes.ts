import {ExtraOptions, Routes} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {HomeComponent} from './home/home.component';
import { loadModule } from './externals-utils';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: 'ngrx-booking',
    loadChildren: () => import('@flight-workspace/booking/feature-search')
                          .then(x => x.BookingFeatureSearchModule)
  },
  {
    path: 'bonus-miles',
    loadChildren: () => loadModule('./assets/flight-workspace-bonus-miles.umd.js')
                          .then(g => g['flight-workspace']['bonus-miles'].BonusMilesModule)
  },
  // This routes MUST be the last one!
  {
    path: '**',
    redirectTo: 'home'
  }
];
