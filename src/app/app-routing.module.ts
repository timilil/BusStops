import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectedBusStopComponent} from './selected-bus-stop/selected-bus-stop.component';
import {BusstopsComponent} from './busstops/busstops.component';
import {DisruptsinfoComponent} from './disruptsinfo/disruptsinfo.component';

const routes: Routes = [
  { path: 'bus-stops', component: BusstopsComponent },
  { path: 'selected-bus-stop/:busDirection/:busId', component: SelectedBusStopComponent },
  { path: 'disruptsinfo', component: DisruptsinfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
