import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.css']
})
export class DressesListComponent implements OnInit {
  @Output() dress: any;

  dresses = [

    {
      name: 'Dress 7',
      price: '300$',
      src: 'assets/Images/Dresses/7.jpg',
    },
    {
      name: 'Dress 8',
      price: '300$',
      src: 'assets/Images/Dresses/8.jpg',
    },
    {
      name: 'Dress 9',
      price: '300$',
      src: 'assets/Images/Dresses/9.jpg',
    },
    {
      name: 'Dress 10',
      price: '300$',
      src: 'assets/Images/Dresses/10.jpg',
    },
    {
      name: 'Dress 7',
      price: '300$',
      src: 'assets/Images/Dresses/7.jpg',
    },
    {
      name: 'Dress 8',
      price: '300$',
      src: 'assets/Images/Dresses/8.jpg',
    },
    {
      name: 'Dress 9',
      price: '300$',
      src: 'assets/Images/Dresses/9.jpg',
    },
    {
      name: 'Dress 10',
      price: '300$',
      src: 'assets/Images/Dresses/10.jpg',
    },
    {
      name: 'Dress 7',
      price: '300$',
      src: 'assets/Images/Dresses/7.jpg',
    },
    {
      name: 'Dress 8',
      price: '300$',
      src: 'assets/Images/Dresses/8.jpg',
    },
    {
      name: 'Dress 9',
      price: '300$',
      src: 'assets/Images/Dresses/9.jpg',
    },
    {
      name: 'Dress 10',
      price: '300$',
      src: 'assets/Images/Dresses/10.jpg',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
