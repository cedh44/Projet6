import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthModule} from "./pages/features/auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SubjectListComponent} from "./pages/features/postandsubject/components/subjectList/subjectList.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "./pages/features/header/header.module";
import {PostListComponent} from './pages/features/postandsubject/components/postList/postList.component';
import {MatIconModule} from "@angular/material/icon";
import { CreatepostComponent } from './pages/features/postandsubject/components/createpost/createpost.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [AppComponent, HomeComponent, SubjectListComponent, PostListComponent, CreatepostComponent],
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
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
