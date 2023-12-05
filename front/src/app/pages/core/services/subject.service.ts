import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from "../models/subject.models";

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    private pathService = 'api/subject';

    constructor(private httpClient: HttpClient) {
    }

    //Appel au back pour récupérer tous les subjects
    public all(): Observable<Subject[]> {
        return this.httpClient.get<Subject[]>(`${this.pathService}`);
    }

    //Appel au back pour récupérer tous les subjects souscrits par l'utilisateur
    public allSubscribedSubjects(userId: number): Observable<Subject[]> {
        return this.httpClient.get<Subject[]>(`${this.pathService}/subscribedsubjects/${userId}`);
    }

    //Appel au back pour récupérer tous les subjects NON souscrits par l'utilisateur
    public allNotSubscribedSubjects(userId: number): Observable<Subject[]> {
        return this.httpClient.get<Subject[]>(`${this.pathService}/notsubscribedsubjects/${userId}`);
    }

    //Abonnement à un thème par son id
    public subscribeSubject(idSubject: number, userId: number): Observable<void> {
        return this.httpClient.post<void>(`${this.pathService}/${idSubject}/subscribe/${userId}`, null);
    }

    //Désabonnement d'un thème par son id
    public unSubscribeSubject(idSubject: number, userId: number): Observable<void> {
        return this.httpClient.post<void>(`${this.pathService}/${idSubject}/unsubscribe/${userId}`, null);
    }

}
