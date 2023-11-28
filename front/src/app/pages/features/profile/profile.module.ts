import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/profile/profile.component';
import {HeaderModule} from "../header/header.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {SubjectModule} from "../subject/subject.module";
import {CoreModule} from "../../core/core.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SubjectModule,
        CoreModule,
        MatButtonModule
    ]
})
export class ProfileModule {
}
