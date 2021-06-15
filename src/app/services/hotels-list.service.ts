import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsListService {
  public getHotels() {
 
    let hotels:Hotel[];

    hotels=[
        new Hotel(0,
          'Thalasso douz',
          'douz',
         './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
         './assets/img/reception/pexels-helena-lopes-3215519.jpg',
           './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
        './assets/img/reception/pexels-helena-lopes-3215519.jpg',
          './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
          4,500,
          '2021-06-25',
          '03/07/2021'),
        new Hotel(1,'Thalasso mannouba','mannouba',
         './assets/img/bedrooms/pexels-pixabay-164595.jpg',
         './assets/img/reception/pexels-pixabay-53577.jpg',
         './assets/img/bathrooms/pexels-max-vakhtbovych-6538891.jpg',
        './assets/img/piscines/pexels-donald-tong-189296.jpg',
         './assets/img/restaurants/pexels-andrea-piacquadio-3769740.jpg',
         3,
        300,
        '2021-07-02',
        '06/07/2021'),

        new Hotel(2,'Thalasso marsa','marsa',
        './assets/img/reception/pexels-helena-lopes-2017802.jpg',
      './assets/img/bedrooms/pexels-max-vakhtbovych-6527060.jpg',
        './assets/img/bathrooms/pexels-max-vakhtbovych-6538889.jpg',
       './assets/img/restaurants/pexels-andrea-piacquadio-3769740.jpg',
        './assets/img/piscines/pexels-quark-studio-2506988.jpg',
        5,
        700,
        '2021-08-02',
        '11/08/2021'),

        new Hotel(3,
          'Thalasso tozeur',
          'tozeur',
         './assets/img/reception/random-institute-FDcydLvV7Io-unsplash.jpg',
    './assets/img/bedrooms/pexels-pixabay-271618.jpg',
    './assets/img/bathrooms/pexels-andrea-piacquadio-3756045.jpg',
    './assets/img/restaurants/pexels-rene-asmussen-3217156.jpg',
  './assets/img/piscines/pexels-kindel-media-7294665.jpg',
    3,
    400,
    '15/09/2021',
    '30/09/2021'),
          new Hotel(4,
            'Thalasso douz',
            'douz',
           './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
           './assets/img/reception/pexels-helena-lopes-3215519.jpg',
             './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
          './assets/img/reception/pexels-helena-lopes-3215519.jpg',
            './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
            4,500,
            '2021-06-25',
            '03/07/2021'),
            new Hotel(5,
              'Thalasso douz',
              'douz',
             './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
             './assets/img/reception/pexels-helena-lopes-3215519.jpg',
               './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
            './assets/img/reception/pexels-helena-lopes-3215519.jpg',
              './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
              4,500,
              '2021-06-25',
              '03/07/2021'),
              new Hotel(6,
                'Thalasso douz',
                'douz',
               './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
               './assets/img/reception/pexels-helena-lopes-3215519.jpg',
                 './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
              './assets/img/reception/pexels-helena-lopes-3215519.jpg',
                './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
                4,500,
                '2021-06-25',
                '03/07/2021'),
    ]

    return hotels;               
}



public getHotel(id) {
  let hotels:Hotel[]=this.getHotels();
  return hotels.find(p => p.id==id);
}

  constructor() { }
}
