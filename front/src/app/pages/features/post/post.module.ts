import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PostListComponent} from "./components/post-list/post-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {PostRoutingModule} from "./post-routing.module";
import {CreatePostComponent} from "./components/create-post/create-post.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [PostListComponent, CreatePostComponent, PostDetailComponent],
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
        FormsModule,
        MatButtonModule,
        NgOptimizedImage
    ]
})
export class PostModule {
}
