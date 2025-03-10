import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MessageResponse} from "../../../core/models/messageResponse.models";
import {Comment} from "../models/comment.models";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    private pathService = 'api/comment';

    constructor(private httpClient: HttpClient) {
    }

    //Appel au back pour récupérer tous les posts du user suivant les subjects abonnés
    public allCommentsByPostId(postId: number): Observable<Comment[]> {
        return this.httpClient.get<Comment[]>(`${this.pathService}/post/${postId}`);
    }

    //Appel au back pour la création d'un commentaire
    public createComment(comment: Comment): Observable<MessageResponse> {
        return this.httpClient.post<MessageResponse>(`${this.pathService}`, comment);
    }
}
