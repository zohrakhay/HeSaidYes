import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { DressesComponent } from './dresses/dresses.component';
import { HoneyMoonComponent } from './honey-moon/honey-moon.component';
import { SuitsComponent } from './suits/suits.component';

const routes: Routes = [
  {
    path: 'honey-moon',
    component : HoneyMoonComponent
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
  path: 'suits',
  component : SuitsComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
