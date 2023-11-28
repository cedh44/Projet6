import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";



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
        RouterLinkWithHref,
        MatSidenavModule
    ]
})
export class HeaderModule { }
