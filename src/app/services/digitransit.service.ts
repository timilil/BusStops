import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) {
  }

  getAllStops() {
    const body = `{
                    stops{
                      gtfsId
                      name
                      lat
                      lon
                     }
                  }`;

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql'),
    };
    return this.http.post(this.apiUrl, body, settings);
  }

  getRoutesByStopId(stopId) {
    {
      const body = `{
                      stop(id: "${stopId}") {
                        name
                        lat
                        lon
                        patterns {
                          id
                          name
                          route {
                            gtfsId
                            shortName
                            longName
                          }
                          directionId
                        }
                      }
                    }`;
      const settings = {
        headers: new HttpHeaders().set('Content-Type', 'application/graphql'),
      };
      return this.http.post(this.apiUrl, body, settings);
    }
  }

  getFullRouteByDirectionAndBusId(busDirection, busId) {
    {
      const body = `{
                      pattern(id:"${busId}:${busDirection}:01") {
                        name
                        stops{
                          name  
                        }
                      }
                    }`;
      const settings = {
        headers: new HttpHeaders().set('Content-Type', 'application/graphql'),
      };
      return this.http.post(this.apiUrl, body, settings);
    }
  }

}
