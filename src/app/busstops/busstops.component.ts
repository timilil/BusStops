import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {Router} from '@angular/router';

declare const google;

@Component({
  selector: 'app-busstops',
  templateUrl: './busstops.component.html',
  styleUrls: ['./busstops.component.css'],
})
export class BusstopsComponent implements OnInit {

  latitude: number;
  longitude: number;
  searchControl: FormControl;
  zoom: number;
  response: any;
  stopId: string;
  arrayOf8000Stops: Array<{ gtfsId: string, name: string, lat: number, lon: number }> = [];
  public selectedStop: any;
  stopname: string;
  buses: any;

  @ViewChild('search')
  searchElementRef: ElementRef;

  constructor(
    private digitransitService: DigitransitService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router) {
  }

  labelOptions = {
    color: '#0000FF',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Your Location',
  };

  ngOnInit() {
    this.digitransitService.getAllStops().subscribe(response => {
      console.log(response);
      this.response = response;
      for (let i = 0; i < 8000; i++) {
        this.arrayOf8000Stops.push(this.response.data.stops[i]);
      }
    });

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement, {
          types: ['address'],
        });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }

  setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  redirectToClickedBusStop(stopId) {
    console.log(stopId);
    this.stopId = stopId;
    this.digitransitService.getRoutesByStopId(stopId).subscribe(response => {
      console.log(response);
      this.selectedStop = response;
      this.stopname = this.selectedStop.data.stop.name;
      this.buses = this.selectedStop.data.stop.patterns;
    });
  }

  shareData(event, busDirection, busId) {
    this.router.navigate(['/selected-bus-stop', busDirection, busId]);
  }

}
