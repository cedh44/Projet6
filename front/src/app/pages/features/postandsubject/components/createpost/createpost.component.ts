import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {SessionService} from "../../../../services/session.service";
import {Observable} from "rxjs";
import {Subject} from "../../models/subject.models";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Post} from "../../models/post.models";
import {PostService} from "../../services/post.service";
import {MessageResponse} from "../../../../models/messageResponse.models";

@Component({
    selector: 'app-createpost',
    templateUrl: './createpost.component.html',
    styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

    public subjects$!: Observable<Subject[]>;
    public userId: number;
    public onError = false;
    public postForm = this.formBuilder.group({
        subject_id: ['', [Validators.required]],
        title: ['',[Validators.required,Validators.minLength(3)]],
        content: ['', ]
    });

    constructor(private subjectService: SubjectService,
                private sessionService: SessionService,
                private postService: PostService,
                private router: Router,
                private formBuilder: FormBuilder,
                private matSnackBar: MatSnackBar) {
        this.userId = this.sessionService.userSession!.id;
    }

    ngOnInit(): void {
        //Appel au back pour récupérer tous les subjects à afficher dans la liste de choix
        this.subjects$ = this.subjectService.all();
    }

    public onCreatePost(): void {
        const newPost = this.postForm?.value as Post;
        newPost.user_id = this.userId;
        this.postService.createPost(newPost).subscribe({
            next: (response: MessageResponse) => {
                this.onError = false;
                this.matSnackBar.open(response.message, 'Close', { duration: 3000 });
                this.router.navigate(['/post']);
            },
            error: error => this.onError = true,
        });
    }

}
