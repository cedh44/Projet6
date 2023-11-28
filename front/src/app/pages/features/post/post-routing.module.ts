import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./components/post-list/post-list.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes: Routes = [
    {
        title: 'Créer un article',
        path: 'createPost',
        component: CreatePostComponent,
        canActivate: [AuthGuard]
    },
    {
        title: 'Détail de l\'article',
        path: 'postDetail/:postId',
        component: PostDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        title: 'Liste des Articles',
        path: '',
        component: PostListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {
}
