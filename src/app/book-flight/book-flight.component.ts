import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { FlightService } from '../flight.service';
import { Location } from '../location';
import { Places } from '../places';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent implements OnInit {
  flight: any;
  minDate = new Date();
  country: string = 'RO';
  currency: string = 'EUR';
  locale: string = 'en-GB';
  originPlace = new FormControl('');
  destinationPlace = new FormControl('');
  outboundPartialDate: Date = new Date();
  inboundPartialDate: any;
  locationList: Location;
  filteredPlaces: Observable<Places[]>;
  placesEmptyList: Location[] = [];

  constructor(private service: FlightService, private datePipe: DatePipe) {}

  ngOnInit(): void {}

  private _filterPlaces(value: string): any {
    const filterValue = value.toLowerCase();
    var location = {
      country: this.country,
      currency: this.currency,
      locale: this.locale,
      id: filterValue,
    };
    if (filterValue.length > 1) {
      this.service.getLocations(location).subscribe((data) => {
        this.locationList = data;

        this.locationList.Places.filter((state: any) =>
          state.PlaceName.toLowerCase().includes(filterValue)
        );
      });
    } else {
      return this.placesEmptyList;
    }
  }
  getOriginFilteredList(): any {
    this.filteredPlaces = this.originPlace.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this._filterPlaces(state) : this.locationList?.Places?.slice()
      )
    );
    return this.filteredPlaces;
  }
  getDestinationFilteredList(): any {
    this.filteredPlaces = this.destinationPlace.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this._filterPlaces(state) : this.locationList?.Places?.slice()
      )
    );
    return this.filteredPlaces;
  }
  searchFlight() {
    var flight = {
      country: this.country,
      currency: this.currency,
      locale: this.locale,
      originPlace: this.originPlace,
      destinationPlace: this.destinationPlace,
      outboundPartialDate: this.datePipe.transform(
        this.outboundPartialDate,
        'yyyy-MM-dd'
      ),
      inboundPartialDate:
        this.inboundPartialDate !== undefined || null
          ? this.datePipe.transform(this.inboundPartialDate, 'yyyy-MM-dd')
          : null,
    };
    this.service.getFlight(flight).subscribe();
  }
}
