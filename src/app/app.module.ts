import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionsComponent } from './collections/collections.component';
import { DressesComponent } from './dresses/dresses.component';
import { DressItemComponent } from './dresses/dress-item/dress-item.component';
import { DressesListComponent } from './dresses/dresses-list/dresses-list.component';
import { HoneyMoonComponent } from './honey-moon/honey-moon.component';
import { ItemComponent } from './honey-moon/item/item.component';
import { HotelsListComponent } from './honey-moon/hotels-list/hotels-list.component';
import { FormsModule } from '@angular/forms';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SuitsComponent } from './suits/suits.component';
import { SuitItemComponent } from './suits/suit-item/suit-item.component';
import { SuitsListComponent } from './suits/suits-list/suits-list.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchdatearrPipe } from './searchdatearr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    DressesComponent,
    DressItemComponent,
    DressesListComponent,
    HoneyMoonComponent,
    ItemComponent,
    HotelsListComponent,
    HotelDetailsComponent,
    ReviewsComponent,
    SuitsComponent,
    SuitItemComponent,
    SuitsListComponent,
    ModalContentComponent,
    ModalComponentComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SearchfilterPipe,
    SearchdatearrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
