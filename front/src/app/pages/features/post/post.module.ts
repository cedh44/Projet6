import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {CreatepostComponent} from "./components/createpost/createpost.component";
import {PostListComponent} from "./components/postList/postList.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HeaderModule} from "../header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {PostRoutingModule} from "./post-routing.module";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
    declarations: [CreatepostComponent, PostListComponent],
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
