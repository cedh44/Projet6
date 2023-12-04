import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {SessionService} from "../../../../core/services/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Post} from "../../models/post.models";
import {Comment} from "../../models/comment.models";
import {Observable} from "rxjs";
import {MessageResponse} from "../../../../core/models/messageResponse.models";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public post$!: Observable<Post>;
    public commentList$!: Observable<Comment[]>;
    private postId!: number | undefined;
    public userId: number;

    public onError = false;
    public commentForm = this.fb.group({
        content: ['', [Validators.required]]
    });

    constructor(private postService: PostService,
                private sessionService: SessionService,
                private commentService: CommentService,
                private fb: FormBuilder,
                private matSnackBar: MatSnackBar,
                private router: Router,
                private route: ActivatedRoute) {
        this.userId = this.sessionService.userSession!.id;
    }

    ngOnInit(): void {
        //On récupère de la liste des articles, l'id
        this.postId = +this.route.snapshot.paramMap.get('postId')!;

        //Récupérer le post du back (titre, content, date, auteur, subject)
        this.post$ = this.postService.postById(this.postId);

        //Récupérer les commentaires du back (content et auteur)
        this.commentList$ = this.commentService.allCommentsByPostId(this.postId)
    }

    public back() {
        window.history.back();
    }

    onCreateComment(): void{
        const newComment = this.commentForm?.value as Comment;
        newComment.user_id = this.userId;
        newComment.post_id = this.postId!;
        this.commentService.createComment(newComment).subscribe({
            next: (response: MessageResponse) => {
                this.onError = false;
                this.matSnackBar.open(response.message, 'Close', { duration: 3000 });
                //Rechargement de la page suite à l'enregistrement du commentaire
                this.ngOnInit();
                this.commentForm?.reset();
                //this.commentForm?.setValue({content:' '});

            },
            error: () => this.onError = true,
        });
    }
}