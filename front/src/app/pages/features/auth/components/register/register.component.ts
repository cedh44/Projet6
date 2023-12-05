import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {RegisterRequest} from "../../interfaces/registerRequest.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public onError = false;
    private passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    public form = this.formBuilder.group({
        name: [
            '',
            [
                Validators.required,
                Validators.minLength(3)
            ]
        ],
        email: [
            '',
            [
                Validators.required,
                Validators.email
            ]
        ],
        password: [
            '',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.passwordRegex)
            ]
        ]
    });

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    onRegister(): void {
        const registerRequest = this.form.value as RegisterRequest;
        this.authService.register(registerRequest).subscribe({
            next: (_: any) => {
                this.onError = false;
                this.matSnackBar.open("utilisateur créé", 'Close', { duration: 3000 });
                this.router.navigate(['/login']);
            },
            error: () => this.onError = true,
        });
    }

    public home() {
        this.router.navigate(['/']);
    }
}
