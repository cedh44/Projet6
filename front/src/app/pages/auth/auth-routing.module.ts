import { NgModule } from '@angular/core';
import {LoginComponent} from "./components/login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { title: 'Login', path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
