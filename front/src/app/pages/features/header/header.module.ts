import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref
  ]
})
export class HeaderModule { }
