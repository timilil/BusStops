import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-disruptsinfo',
  templateUrl: './disruptsinfo.component.html',
  styleUrls: ['./disruptsinfo.component.css']
})
export class DisruptsinfoComponent implements OnInit {

  disruptArray: any;
  disruptInfo: any;

  constructor(private digiTransitService: DigitransitService) { }

  ngOnInit() {
    this.digiTransitService.getDisruptsInfo().subscribe(response => {
      console.log(response);
      this.disruptArray = response;
      this.disruptInfo = this.disruptArray.data.alerts;
    });
  }

}
