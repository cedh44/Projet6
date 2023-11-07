import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginRequest} from "../interfaces/loginRequest.interface";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {RegisterRequest} from "../interfaces/registerRequest.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pathService = '/auth';

    constructor(private httpClient: HttpClient) {
    }

    public login(loginRequest: LoginRequest): Observable<any> {
        return this.httpClient.post<any>(`${environment.baseUrl}${this.pathService}/login`, loginRequest);
    }

    public register(registerRequest : RegisterRequest): Observable<any> {
        return this.httpClient.post<any>(`${environment.baseUrl}${this.pathService}/register`, registerRequest)
    }

}