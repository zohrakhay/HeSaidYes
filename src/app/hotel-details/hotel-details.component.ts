import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from '../models/hotel/hotel';
import { HotelsListService } from '../services/hotels/hotels-list.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotels: Hotel[];
  id;
  @Input() hotel: Hotel;
    
  showNavigationArrows = false;
  showNavigationIndicators = false;
  myimages=[];
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(config: NgbCarouselConfig,rtconfig: NgbRatingConfig, private _Activatedroute:ActivatedRoute,
    private _router:Router,private _HotelService:HotelsListService) {
      rtconfig.max = 5;
   rtconfig.readonly = true;
   }

   
   sub;
 
   ngOnInit():void {
 
      this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          let hotels=this._HotelService.getHotels();
          this._HotelService.getHotel(this.id).subscribe(
            (hotel) => this.hotel = hotel
      );
          //this.hotel=this._HotelService.getHotel(this.id); 
          //this.hotel=this.hotels.find(p => p.id==this.id); 
      
            
      });
      //console.log(this.id);
    
      
      //this.myimages=[this.hotel.src1, this.hotel.src2, this.hotel.src3, this.hotel.src4, this.hotel.src5];
    // console.log(this.myimages);
     
     

}

ngOnDestroy() {
  this.sub.unsubscribe();
}

onBack(): void {
   this._router.navigate(['honey-moon']);
}
}
