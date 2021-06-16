import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { COLOR } from 'src/assets/color/colors';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [NgbRatingConfig]
})
export class ReviewsComponent implements OnInit {

  color=COLOR;
  constructor(rtconfig: NgbRatingConfig, public  authentificationService: AuthentificationService) {
    rtconfig.max = 5;
    rtconfig.readonly = true;
   }

  ngOnInit(): void {
  }

}
