import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectListTemplateComponent} from './components/subject-list-template/subject-list-template.component';
import {MatCardModule} from "@angular/material/card";
import {SubjectListComponent} from "./components/subjectList/subjectList.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        SubjectListTemplateComponent, SubjectListComponent
    ],
    exports: [
        SubjectListTemplateComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        BrowserModule,
        AppRoutingModule,
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
    ]
})
export class SubjectModule {
}
