import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SubjectComponent} from "./pages/features/postandsubject/components/subject/subject.component";

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
        path: 'subject',
        component: SubjectComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
