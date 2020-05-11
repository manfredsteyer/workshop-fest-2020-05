import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule, 
    BookingDomainModule,
    RouterModule.forChild([
      { path: '', component: SearchComponent }
    ])
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class BookingFeatureSearchModule {}
