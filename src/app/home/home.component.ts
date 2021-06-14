import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nums = [ 0, 1 , 2  ];
  CompName =[ "Dresses" , "Suits" , "Honey-moon" ];
  constructor() { }

  ngOnInit(): void {
  }

}
