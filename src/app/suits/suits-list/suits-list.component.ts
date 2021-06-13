import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suits-list',
  templateUrl: './suits-list.component.html',
  styleUrls: ['./suits-list.component.css']
})
export class SuitsListComponent implements OnInit {
  @Output() suit: any;

  suits = [

    {
      name: 'Suit 7',
      src: 'assets/img/Suits/10.jfif',
    },
    {
      name: 'Suit  8',
      src: 'assets/img/Suits/12.jfif',
    },

    {
      name: 'Suit  10',
      src: 'assets/img/Suits/4.png',
    },
    {
      name: 'Suit  7',
      src: 'assets/img/Suits/5.jfif',
    },

    {
      name: 'Suit 9',
      src: 'assets/img/Suits/7.jfif',
    },
    {
      name: 'Suit  10',
      src: 'assets/img/Suits/8.jfif',
    },
    {
      name: 'Suit  7',
      src: 'assets/img/Suits/9.jfif',
    },
    {
      name: 'Suit  8',
      src: 'assets/img/Suits/8.jpg',
    },
    {
      name: 'Suit  9',
      src: 'assets/img/Suits//11.jfif',
    },
    {
      name: 'Suit  9',
      src: 'assets/img/Suits//1.jpg',
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
