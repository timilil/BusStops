import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectedBusStopComponent} from './selected-bus-stop/selected-bus-stop.component';
import {BusstopsComponent} from './busstops/busstops.component';

const routes: Routes = [
  { path: 'bus-stops', component: BusstopsComponent },
  { path: 'selected-bus-stop/:busDirection/:busId', component: SelectedBusStopComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
