import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from "./components/post-list/post-list.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostRoutingModule} from "./post-routing.module";
import {CreatePostComponent} from "./components/create-post/create-post.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [PostListComponent, CreatePostComponent, PostDetailComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        MatSnackBarModule,
        HeaderModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule
    ]
})
export class PostModule {
}
