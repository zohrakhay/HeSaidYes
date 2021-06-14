import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers:[NgbRatingConfig]
})
export class ReviewsComponent implements OnInit {

  constructor(rtconfig: NgbRatingConfig) {
    rtconfig.max = 5;
    rtconfig.readonly = true;
   }

  ngOnInit(): void {
  }

}
