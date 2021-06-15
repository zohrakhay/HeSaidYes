import { Component, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  model: NgbDateStruct;
  searchValue: string;
  searcharrDate: string;
  searchdepDate: string;
  @Output()  hotel: Hotel;
  @Output()hotels = [
  {
    name: 'Thalasso douz',
    src1: './assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg',
    src2: './assets/img/reception/pexels-helena-lopes-3215519.jpg',
    src3: './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
    src4: './assets/img/reception/pexels-helena-lopes-3215519.jpg',
    src5: './assets/img/bathrooms/pexels-quark-studio-2507016.jpg',
    stars: 4,
    price: 500,
    date_arrivée:'2021-06-25',
    date_départ:'03/07/2021'

  },
  {
    name: 'Thalasso mannouba',
    src1: './assets/img/bedrooms/pexels-pixabay-164595.jpg',
    src2: './assets/img/reception/pexels-pixabay-53577.jpg',
    src3: './assets/img/bathrooms/pexels-max-vakhtbovych-6538891.jpg',
    src4: './assets/img/piscines/pexels-donald-tong-189296.jpg',
    src5: './assets/img/restaurants/pexels-andrea-piacquadio-3769740.jpg',
    stars: 3,
    price: 300,
    date_arrivée:'2021-07-02',
    date_départ:'06/07/2021'
  },
  {
    name: 'Thalasso marsa',
    src1: './assets/img/reception/pexels-helena-lopes-2017802.jpg',
    src2: './assets/img/bedrooms/pexels-max-vakhtbovych-6527060.jpg',
    src3: './assets/img/bathrooms/pexels-max-vakhtbovych-6538889.jpg',
    src4: './assets/img/restaurants/pexels-andrea-piacquadio-3769740.jpg',
    src5: './assets/img/piscines/pexels-quark-studio-2506988.jpg',
    stars: 5,
    price: 700,
    date_arrivée:'2021-08-02',
    date_départ:'11/08/2021'
  },
  {
    name: 'Thalasso tozeur',
    src1: './assets/img/reception/random-institute-FDcydLvV7Io-unsplash.jpg',
    src2: './assets/img/bedrooms/pexels-pixabay-271618.jpg',
    src3: './assets/img/bathrooms/pexels-andrea-piacquadio-3756045.jpg',
    src4: './assets/img/restaurants/pexels-rene-asmussen-3217156.jpg',
    src5: './assets/img/piscines/pexels-kindel-media-7294665.jpg',
    stars: 3,
    price: 400,
    date_arrivée:'15/09/2021',
    date_départ:'30/09/2021'
  },

  {
    name: 'Thalasso tozeur',
    src1: './assets/img/reception/reisetopia-Vl5DAQxNBbM-unsplash.jpg',
    src2: './assets/img/bedrooms/pexels-max-vakhtbovych-6538888.jpg',
    src3: './assets/img/bathrooms/pexels-maria-orlova-4946764.jpg',
    src4: './assets/img/piscines/pexels-asad-photo-maldives-1268871.jpg',
    src5: './assets/img/restaurants/pexels-timur-saglambilek-66639.jpg',
    stars: 4,
    price: 500
  },
  {
    name: 'Thalasso tozeur',
    src1: './assets/img/reception/myhq-workspaces-Becc3eg9-l0-unsplash.jpg',
    src2: './assets/img/bedrooms/pexels-maria-orlova-4946767.jpg',
    src3: './assets/img/bathrooms/pexels-max-vakhtbovych-6315803.jpg',
    src4: './assets/img/restaurants/pexels-rachel-claire-5490932.jpg',
    src5: './assets/img/piscines/pexels-asad-photo-maldives-1024967.jpg',
    stars: 5,
    price: 800
  },
  {
    name: 'Thalasso tozeur',
    src1: './assets/img/reception/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg',
    src2: './assets/img/bedrooms/pexels-castorly-stock-3682238.jpg',
    src3: './assets/img/bathrooms/pexels-max-vakhtbovych-6186825.jpg',
    src4: './assets/img/restaurants/pexels-rachel-claire-5490932.jpg',
    src5: './assets/img/piscines/pexels-pixabay-221457.jpg',
    stars: 3
  },
  {
    name: 'Thalasso tozeur',
    src1: './assets/img/reception/cloris-ying-QJMKyrud5l8-unsplash.jpg',
    src2: './assets/img/bedrooms/pexels-max-vakhtbovych-6284232.jpg',
    src3: './assets/img/bathrooms/pexels-castorly-stock-3610006.jpg',
    src4: './assets/img/piscines/pexels-thorsten-technoman-338504.jpg',
    src5: './assets/img/restaurants/pexels-craig-adderley-2306282.jpg',
    stars: 3
  }
];
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
