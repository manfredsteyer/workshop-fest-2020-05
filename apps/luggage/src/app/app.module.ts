import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { LuggageFeatureReportLossModule } from '@flight-workspace/luggage/feature-report-loss';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    LuggageFeatureCheckinModule, 
    HttpClientModule, 
    LuggageFeatureReportLossModule,
    RouterModule.forRoot([
      { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'check-in'
      },
      { 
        path: 'check-in', 
        loadChildren: () => import('@flight-workspace/luggage/feature-checkin')
                              .then(m => m.LuggageFeatureCheckinModule) 
      },
      { 
        path: 'report-loss', 
        loadChildren: () => import('@flight-workspace/luggage/feature-report-loss')
                              .then(m => m.LuggageFeatureReportLossModule) 
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
