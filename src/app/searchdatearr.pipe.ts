import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from './models/hotel';

@Pipe({
  name: 'searchdatearr'
})
export class SearchdatearrPipe implements PipeTransform {

  transform(hotels: Hotel[], searchValue: string): Hotel[]{
    if(!hotels || !searchValue){
      return hotels;
    }

    return hotels.filter(hotel =>
      
        hotel.date_arrivée.includes(searchValue)
      );
  }

}
