import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatetimeComponent } from './datetime/datetime.component';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { DistComponent } from './dist/dist.component';
import { WorldComponent } from './world/world.component';
import { AboutComponent } from './about/about.component';
import { NotComponent } from './not/not.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'state', component:StateComponent},
  {path:'dist', component:DistComponent},
  {path:'world', component:WorldComponent},
  {path:'about', component:AboutComponent},
  {path:'**', component:NotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
