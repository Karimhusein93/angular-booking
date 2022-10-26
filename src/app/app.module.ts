import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { FlightService } from './flight.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    ManageBookingComponent,
    NavbarComponent,
    ContactComponent,
    OffersComponent,
    DestinationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
