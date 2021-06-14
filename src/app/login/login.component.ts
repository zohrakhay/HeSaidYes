import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService, private router: Router,    private toaster: ToastrService
    ) {
   }


   ngOnInit(): void {}

   login(loginForm: NgForm): void  {
     this.authentificationService.login(loginForm.value).subscribe(
       (data) => {
         localStorage.setItem('token', data.id);
         this.router.navigate(['/home']);
       },
       (erreur) => {
         this.toaster.success(`Veuillez vérifier vos credentials`);
         console.log(erreur);
       }
     );
   }



}
