import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
  providers:[NgbCarouselConfig]
})
export class HotelDetailsComponent implements OnInit {

  @Input() hotel: Hotel;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(config: NgbCarouselConfig) {
    
   }

  ngOnInit(): void {
  }

}
