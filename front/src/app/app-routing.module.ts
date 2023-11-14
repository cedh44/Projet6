import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SubjectListComponent} from "./pages/features/postandsubject/components/subjectList/subjectList.component";
import {PostListComponent} from "./pages/features/postandsubject/components/postList/postList.component";
import {CreatepostComponent} from "./pages/features/postandsubject/components/createpost/createpost.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '',
        loadChildren: () => import('./pages/features/auth/auth.module').then(m => m.AuthModule)
    },
    {
        title: 'Thèmes',
        path: 'subject',
        component: SubjectListComponent
    },
    {
        title: 'Articles',
        path: 'post',
        component: PostListComponent
    },
    {
        title: "Créer un article",
        path: 'createPost',
        component: CreatepostComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
