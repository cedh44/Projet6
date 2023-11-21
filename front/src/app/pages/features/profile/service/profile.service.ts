import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {User} from "../../../core/models/user.models";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private pathService = '/user';

    constructor(private httpClient: HttpClient) {
    }

    public updateProfile(id: number, userToUpdate: User): Observable<User> {
        return this.httpClient.put<User>(`${environment.baseUrl}${this.pathService}/${id}`, userToUpdate);
    }


}