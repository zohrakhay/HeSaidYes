import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [NgbCarouselConfig]
})
export class ItemComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000000;
    config.wrap = false;
    
    config.pauseOnHover = false;
   // config.showNavigationIndicators =false;
    
    
  
   }

  ngOnInit(): void {
  }

}
