import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthModule} from "./pages/features/auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./pages/features/header/header.module";
import {ProfileModule} from "./pages/features/profile/profile.module";
import {SubjectModule} from "./pages/features/subject/subject.module";
import * as fr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {CoreModule} from "./pages/core/core.module";
import {JwtInterceptor} from "./pages/core/interceptors/jwt.interceptor";

@NgModule({
    declarations: [AppComponent, HomeComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        HeaderModule,
        ProfileModule,
        SubjectModule,
        CoreModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'fr-FR'},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}
