import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import {HeaderModule} from "../header/header.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../../../app.module";
import {SubjectModule} from "../subject/subject.module";



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
        AppModule,
        SubjectModule
    ]
})
export class ProfileModule { }
