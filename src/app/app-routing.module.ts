import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'destinations', component: DestinationsComponent},
  { path: 'offers', component:  OffersComponent},
  { path: 'contact', component: ContactComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
