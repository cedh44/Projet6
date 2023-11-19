import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginRequest} from "../interfaces/loginRequest.interface";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {RegisterRequest} from "../interfaces/registerRequest.interface";
import {UserSession} from "../../../models/userSession.models";
import {MessageResponse} from "../../../models/messageResponse.models";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pathService = '/auth';

    constructor(private httpClient: HttpClient) {
    }

    public login(loginRequest: LoginRequest): Observable<any> {
        return this.httpClient.post<UserSession>(`${environment.baseUrl}${this.pathService}/login`, loginRequest);
    }

    public register(registerRequest : RegisterRequest): Observable<any> {
        return this.httpClient.post<MessageResponse>(`${environment.baseUrl}${this.pathService}/register`, registerRequest)
    }

}