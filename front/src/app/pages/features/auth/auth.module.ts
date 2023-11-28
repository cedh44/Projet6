import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './components/register/register.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderModule} from "../header/header.module";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        AuthRoutingModule,  //Nécessaire pour le routing
        CommonModule,
        FormsModule,        //Nécessaire pour les formulaires
        HttpClientModule,   //Nécessaire pour les appels au backend
        MatCardModule,      //Angular Material
        MatFormFieldModule, //Angular Material
        MatFormFieldModule, //Angular Material
        MatInputModule,     //Angular Material
        MatSnackBarModule,  //Snack Bar pour affichage de messages type popup
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        HeaderModule,
        //Pour le form builder
    ]
})
export class AuthModule {
}
