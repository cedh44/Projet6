import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,  //Nécessaire pour le routing
    CommonModule,
    FormsModule,        //Nécessaire pour les formulaires
    HttpClientModule    //Nécessaire pour les appels au backend
  ]
})
export class AuthModule { }
