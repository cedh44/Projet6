import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginRequest} from "../../interfaces/loginRequest.interface";
import {AuthService} from "../../services/auth.service";
import {SessionService} from "../../../../services/session.service";
import {UserSession} from "../../../../models/userSession.models";


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
                Validators.minLength(3)
            ]
        ],
        password: [
            '',
            [
                Validators.required,
                Validators.minLength(3)
            ]
        ]
    });

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private sessionService: SessionService) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        const loginRequest = this.form.value as LoginRequest;
        this.authService.login(loginRequest).subscribe({
            next: (response: UserSession) => {
                console.log('CONNEXION OK');
                this.onError = false;
                this.sessionService.logIn(response)
                this.router.navigate(['/subject']);
            },
            error: error => this.onError = true,
        });
    }

}
