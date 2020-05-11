import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';
import { RouterModule } from '@angular/router';

// import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
// import { FlightApiModule } from '@flight-workspace/flight-api';

@NgModule({
  imports: [
    CommonModule, 
    LuggageDomainModule, 

    RouterModule.forChild([
      { path: '', component: ReportLossComponent }
    ])

    // LuggageFeatureCheckinModule,
    // FlightApiModule,
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent]
})
export class LuggageFeatureReportLossModule {}
