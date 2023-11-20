import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../../environments/environment";
import {Post} from "../models/post.models";
import {MessageResponse} from "../../../models/messageResponse.models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private pathService = '/post';

  constructor(private httpClient: HttpClient) {
  }

  //Appel au back pour récupérer tous les posts du user suivant les subjects abonnés
  public allPostsBySubjectsSuscribed(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.baseUrl}${this.pathService}/user/${userId}`);
  }

  //Appel au back pour la création d'un post
  public createPost(post: Post): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(`${environment.baseUrl}${this.pathService}`, post);
  }

  //Appel au back pour récupérer un post par son id
  public postById(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.baseUrl}${this.pathService}/${postId}`);
  }

}
