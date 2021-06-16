import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { DressesComponent } from './dresses/dresses.component';
import { HoneyMoonComponent } from './honey-moon/honey-moon.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { LoginComponent } from './login/login.component';
import { SuitsComponent } from './suits/suits.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddDressComponent } from './add-dress/add-dress.component';
import { AddSuitComponent } from './add-suit/add-suit.component';
import { AuthGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [

  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'honey-moon',
    component : HoneyMoonComponent
  },
  {
    path: 'login',
    component : LoginComponent,


  },
  {
    path: 'add-dress',
    component :  AddDressComponent,
    canActivate: [  AdminGuard, AuthGuard ]
  },
  {
    path: 'add-suit',
    component :  AddSuitComponent,
    canActivate: [ AdminGuard, AuthGuard ]
  },
  {
    path: 'sign-up',
    component : SignUpComponent

  },

{
  path: 'collections',
  component : CollectionsComponent
},
{
  path: 'dresses',
  component : DressesComponent
},
{
  path: 'honey-moon/:id',
  component : HotelDetailsComponent
},
{
  path: 'suits',
  component : SuitsComponent
},
{
  path: 'home',
  component : HomeComponent
},
{
  path: 'contact',
  component : ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
