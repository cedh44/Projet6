import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginRequest} from "../../interfaces/loginRequest.interface";
import {AuthService} from "../../services/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public onError = false;

    public form = this.formBuilder.group({
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
                Validators.min(3)
            ]
        ]
    });

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        const loginRequest = this.form.value as LoginRequest;
        this.authService.login(loginRequest).subscribe({
            next: (response: any) => {
                console.log('CONNEXION OK');
                this.onError = false;
                //this.router.navigate(['/login']);
            },
            error: error => this.onError = true,
        });
    }

}
