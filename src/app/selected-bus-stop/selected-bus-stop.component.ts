import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-selected-bus-stop',
  templateUrl: './selected-bus-stop.component.html',
  styleUrls: ['./selected-bus-stop.component.css'],
})
export class SelectedBusStopComponent implements OnInit {
  busData: any;
  busId: string;
  busDirection: number;
  busNumber: string;
  selectedBusNumbersStops: any;

  constructor(
    private digiTransitService: DigitransitService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(response => {
      console.log(response);
      this.busDirection = response.busDirection;
      this.busId = response.busId;
      this.digiTransitService.getFullRouteByDirectionAndBusId(this.busDirection, this.busId).subscribe(response => {
        console.log(response);
        this.busData = response;
        this.busNumber = this.busData.data.pattern.name;
        this.selectedBusNumbersStops = this.busData.data.pattern.stops;
      });
    });
  }
}
