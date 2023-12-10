import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginRequest} from "../models/loginRequest.models";
import {Observable} from "rxjs";
import {RegisterRequest} from "../models/registerRequest.models";
import {UserSession} from "../../../core/models/userSession.models";
import {MessageResponse} from "../../../core/models/messageResponse.models";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pathService = 'api/auth';

    constructor(private httpClient: HttpClient) {
    }

    //Appel au back pour login
    public login(loginRequest: LoginRequest): Observable<any> {
        return this.httpClient.post<UserSession>(`${this.pathService}/login`, loginRequest);
    }

    //Appel au back pour le register
    public register(registerRequest: RegisterRequest): Observable<any> {
        return this.httpClient.post<MessageResponse>(`${this.pathService}/register`, registerRequest)
    }

}