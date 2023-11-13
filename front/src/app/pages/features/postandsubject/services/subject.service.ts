import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from "../models/subject.models";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private pathService = '/subject';

  constructor(private httpClient: HttpClient) {
  }

  //Appel au back pour récupérer tous les subjects
  public all(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`${environment.baseUrl}${this.pathService}`);
  }

  //Abonnement à un sujet par son id
  public subscribeSubject(idSubject: number, userId: number): Observable<void> {
    return this.httpClient.post<void>(`${environment.baseUrl}${this.pathService}/${idSubject}/subscribe/${userId}`, null);
  }

  //Désabonnement d'un sujet par son id
  public unSubscribeSubject(idSubject: number, userId: number): Observable<void> {
    return this.httpClient.post<void>(`${environment.baseUrl}${this.pathService}/${idSubject}/unsubscribe/${userId}`, null);
  }

}
