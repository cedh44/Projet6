import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectListComponent} from "./components/subject-list/subject-list.component";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "../features/header/header.module";

@NgModule({
    declarations: [SubjectListComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,   //Nécessaire pour les appels au backend
        HeaderModule,
    ],
    exports: [SubjectListComponent]
})
export class CoreModule {
}
