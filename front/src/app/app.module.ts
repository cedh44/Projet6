import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthModule} from "./pages/features/auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "./pages/features/header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {ProfileModule} from "./pages/features/profile/profile.module";
import {SubjectModule} from "./pages/features/subject/subject.module";
import * as fr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {CoreModule} from "./pages/core/core.module";

@NgModule({
    declarations: [AppComponent, HomeComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        MatCardModule,
        MatSnackBarModule,
        HeaderModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
        ProfileModule,
        SubjectModule,
        CoreModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}
