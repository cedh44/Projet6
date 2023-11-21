import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatepostComponent} from "./components/createpost/createpost.component";
import {PostListComponent} from "./components/postList/postList.component";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {PostRoutingModule} from "./post-routing.module";
import {PostdetailComponent} from './components/postdetail/postdetail.component';

@NgModule({
    declarations: [CreatepostComponent, PostListComponent, PostdetailComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
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
export class PostModule {
}
