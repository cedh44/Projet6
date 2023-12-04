import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './components/register/register.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        AuthRoutingModule,  //Nécessaire pour le routing
        CommonModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        MatSnackBarModule,  //Snack Bar pour affichage de messages type popup
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AuthModule {
}
