import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/profile/profile.component';
import {HeaderModule} from "../header/header.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SubjectModule} from "../subject/subject.module";
import {CoreModule} from "../../core/core.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        SubjectModule,
        CoreModule
    ]
})
export class ProfileModule {
}
