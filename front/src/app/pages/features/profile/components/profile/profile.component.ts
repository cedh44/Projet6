import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../../core/services/session.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ProfileService} from "../../service/profile.service";
import {User} from "../../../../core/models/user.models";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public onError = false;
    public profileForm = this.formBuilder.group({
        name: [this.sessionService.userSession!.name, [Validators.required, Validators.minLength(3)]],
        email: [this.sessionService.userSession!.email, [Validators.required, Validators.email]]
    });

    constructor(private sessionService: SessionService,
                private profileService: ProfileService,
                private formBuilder: FormBuilder,
                private matSnackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onUpdateProfile(): void {
        const userToUpdate = this.profileForm?.value as User;
        this.profileService.updateProfile(this.sessionService.userSession!.id, userToUpdate).subscribe({
            next: (userUpdated: User) => {
                // L'appel au back s'est bien passé pour la mise à jour : on met les données de session à jour, on affiche un message
                // dans le snackbar et on redirige vers la page des articles
                this.onError = false;
                this.sessionService.userSession!.name = userUpdated.name;
                this.sessionService.userSession!.email = userUpdated.email;
                this.matSnackBar.open("Mise à jour effectuée", 'Close', {duration: 3000});
                this.router.navigate(['/post']);
            },
            error: () => this.onError = true,
        });
    }

    onLogOut(): void {
        this.sessionService.logOut();
        this.router.navigate(['/']);
    }

}
