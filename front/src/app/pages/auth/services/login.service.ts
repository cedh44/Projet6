import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginRequest} from "../interfaces/loginRequest.interface";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

class SessionInformation {
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private pathService = '/auth';

    constructor(private httpClient: HttpClient) {
    }

    public login(loginRequest: LoginRequest): Observable<any> {
        return this.httpClient.post<any>(`${environment.baseUrl}${this.pathService}/login`, loginRequest);
    }

}