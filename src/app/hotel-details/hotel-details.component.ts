import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotels: Hotel[];
  @Input() hotel: Hotel ={
    name: 'Thalasso douz',
    location:'douz',
    src1: './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
    src2: './assets/img/reception/pexels-helena-lopes-3215519.jpg',
    src3: './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
    src4: './assets/img/reception/pexels-helena-lopes-3215519.jpg',
    src5: './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
    stars: 4,
    price: 500,
    date_arrivée:'',
    date_départ:'',
  };
    
  showNavigationArrows = false;
  showNavigationIndicators = false;
  myimages=[this.hotel.src1, this.hotel.src2, this.hotel.src3 ];
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(config: NgbCarouselConfig) {
   }

  ngOnInit(): void {
  }

}
