import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../../core/models/user.models";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private pathService = 'api/user';

    constructor(private httpClient: HttpClient) {
    }

    //Appel au back pour mettre à jour le user
    public updateProfile(id: number, userToUpdate: User): Observable<User> {
        return this.httpClient.put<User>(`${this.pathService}/${id}`, userToUpdate);
    }
}