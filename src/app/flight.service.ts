import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  readonly flightUrl =
    'https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0';
  readonly apiKey = 'prtl6749387986743898559646983194';
  constructor(private http: HttpClient) {}

  getFlight(data: any) {
    return this.http.get(
      this.flightUrl +
        `${data.country}` +
        `${data.currency}` +
        `${data.locale}` +
        `${data.originPlace}` + 
        `${data.destinationPlace}` +
        `${data.outboundPartialDate}` +
        `${data?.inboundPartialDate}`
    );
  }
}
