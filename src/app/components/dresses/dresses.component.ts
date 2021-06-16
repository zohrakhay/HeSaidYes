import { Component, OnInit } from '@angular/core';
import { COLOR } from 'src/assets/color/colors';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {

  color = COLOR;

  constructor() { }

  ngOnInit(): void {
  }

}
