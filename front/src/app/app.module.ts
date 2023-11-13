import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthModule} from "./pages/features/auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SubjectComponent} from "./pages/features/postandsubject/components/subject/subject.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "./pages/features/header/header.module";

@NgModule({
    declarations: [AppComponent, HomeComponent, SubjectComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        MatCardModule,
        MatSnackBarModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
