import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"create", component:CreateComponent},
  {path:"list", component:ListComponent},
  {path:"info/:id", component:InfoComponent},
  {path:"update/:id", component:CreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
