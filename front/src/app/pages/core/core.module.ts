import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectListComponent} from "./components/subject-list/subject-list.component";
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [SubjectListComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        MatCardModule,
        MatSnackBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
    ],
    exports: [SubjectListComponent]
})
export class CoreModule {
}
