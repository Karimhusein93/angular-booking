import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  flight:any;
  country:string = 'RO';
  currency:string = 'EUR';
  locale:string = 'en-GB';
  originPlace:string = '';
  destinationPlace:string = '';
  outboundPartialDate :Date = new Date();
  inboundPartialDate :Date = new Date();

  constructor(private service:FlightService) { }

  ngOnInit(): void {
  }
  getFlight(){
    var flight = {
    country : this.country,
    currency :this.currency,
    locale:this.locale,
    originPlace:this.originPlace,
    destinationPlace:this.destinationPlace,
    outboundPartialDate:this.outboundPartialDate,
    inboundPartialDate:this.inboundPartialDate
    }
    this.service.getFlight(flight).subscribe();
  }
}
