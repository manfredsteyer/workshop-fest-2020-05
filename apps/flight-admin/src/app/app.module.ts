import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightApiModule } from '@flight-workspace/flight-api';

// import { DashboardApiModule } from '@flight-workspace/dashboard-api';

@NgModule({
  imports: [
    BrowserModule,
    FlightApiModule,
    // DashboardApiModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
