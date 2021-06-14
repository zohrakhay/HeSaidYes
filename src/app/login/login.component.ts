import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authentificationService: AuthentificationService) {
   }



   login(): void {
   this.router.navigate(['/collections']);
  }



  ngOnInit(): void {
  }



}
