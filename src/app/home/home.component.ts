import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colorPrimary="#042A38";
  colorSecondary="#ff8d1e";
  colorLight="#dfa974";
  colorLightSecondary='#f7f5eb';

  CompName =[ "Dresses" , "Suits" , "Honey-moon" ];
  constructor() { }

  ngOnInit(): void {
  }
  FlyMe(){
    
  }

}
