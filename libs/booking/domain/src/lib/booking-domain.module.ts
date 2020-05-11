import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { BookingEffects } from './+state/booking.effects';
import { StoreModule } from '@ngrx/store';
import { bookingFeatureKey, reducer } from './+state/booking.reducer';

@NgModule({
  imports: [
    CommonModule, 
    StoreModule.forFeature(bookingFeatureKey, reducer), 
    EffectsModule.forFeature([BookingEffects])
  ]
})
export class BookingDomainModule {}
