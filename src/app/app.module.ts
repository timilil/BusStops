import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BusstopsComponent } from './busstops/busstops.component';
import { DigitransitService} from './services/digitransit.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SelectedBusStopComponent } from './selected-bus-stop/selected-bus-stop.component';
import { DisruptsinfoComponent } from './disruptsinfo/disruptsinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    BusstopsComponent,
    SelectedBusStopComponent,
    DisruptsinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzb1PYKCsVDN6xUDgSmE5bErAyUeCi2fc',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DigitransitService, BusstopsComponent, SelectedBusStopComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
