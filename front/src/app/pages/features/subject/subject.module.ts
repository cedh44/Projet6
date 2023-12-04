import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "../../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {SubjectRootComponent} from "./components/subject-root/subject-root.component";
import {CoreModule} from "../../core/core.module";


@NgModule({
    declarations: [
        SubjectRootComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        HeaderModule,
        MatIconModule,
        CoreModule
    ]
})
export class SubjectModule {
}
