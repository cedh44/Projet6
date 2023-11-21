import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SubjectListComponent} from "./pages/features/subject/components/subjectList/subjectList.component";
import {ProfileComponent} from "./pages/features/profile/components/profile/profile.component";
import {AuthGuard} from "./pages/guards/auth.guard";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

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
        path: 'post',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/features/post/post.module').then(m => m.PostModule)
    },
    {
        title: 'Thèmes',
        path: 'subject',
        component: SubjectListComponent,
        canActivate: [AuthGuard]
    },
    {
        title: "Profile",
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
