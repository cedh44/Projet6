import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginRequest} from "../../interfaces/loginRequest.interface";
import {LoginService} from "../../services/login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userEmail!: string;
    userPassword!: string;

    /*public form = this.fb.group({
        //Plus tard, mettre les validators
    });*/

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        //const loginRequest = this.form.value as LoginRequest;
        const loginRequest:LoginRequest = {
            email: this.userEmail,
            password: this.userPassword};
        this.loginService.login(loginRequest).subscribe({
            next: (response: any) => {
                console.log('CONNEXION OK');
                //this.router.navigate(['/login']);
            },
            error: error => console.log('CONNEXION KO', error),
        });
    }

}
