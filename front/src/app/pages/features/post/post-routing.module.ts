import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./components/postList/postList.component";
import {CreatepostComponent} from "./components/createpost/createpost.component";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
    {
        title: "Créer un article",
        path: 'createPost',
        component: CreatepostComponent,
        canActivate: [AuthGuard]
    },
    {
        title: 'Articles',
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
