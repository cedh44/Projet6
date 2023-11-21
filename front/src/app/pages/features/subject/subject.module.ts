import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SubjectListTemplateComponent } from './components/subject-list-template/subject-list-template.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    SubjectListTemplateComponent
  ],
  exports: [
    SubjectListTemplateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SubjectModule { }
