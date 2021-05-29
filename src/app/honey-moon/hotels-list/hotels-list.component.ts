import { Component, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  @Output()  hotel: Hotel;
hotels=[
  {
    name: "Thalasso douz",
    src1: "./assets/img/bedrooms/pexels-jonathan-borba-3144580.jpg",
    src2: "./assets/img/reception/pexels-helena-lopes-3215519.jpg",
    src3: "./assets/img/bathrooms/pexels-quark-studio-2507016.jpg"
  },
  {
    name: "Thalasso mannouba",
    src1: "./assets/img/bedrooms/pexels-pixabay-164595.jpg",
    src2: "./assets/img/reception/pexels-pixabay-53577.jpg",
    src3: "./assets/img/bathrooms/pexels-max-vakhtbovych-6538891.jpg"
  },
  {
    name: "Thalasso marsa",
    src1: "./assets/img/reception/pexels-helena-lopes-2017802.jpg",
    src2: "./assets/img/bedrooms/pexels-max-vakhtbovych-6527060.jpg",
    src3: "./assets/img/bathrooms/pexels-max-vakhtbovych-6538889.jpg"
  },
  {
    name: "Thalasso tozeur",
    src1: "./assets/img/reception/pexels-justin-hamilton-205342.jpg",
    src2: "./assets/img/bedrooms/pexels-pixabay-271618.jpg",
    src3: "./assets/img/bathrooms/pexels-max-vakhtbovych-6538889.jpg"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
