import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.models";
import {SessionService} from "../../../../core/services/session.service";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-post',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    public postsList!: Post[];
    public emptyListPostMessage: string = '';
    public userId: number;
    public ascend: boolean = true;

    constructor(private postService: PostService,
                private sessionService: SessionService,
                private router: Router) {
        this.userId = this.sessionService.userSession!.id;
    }

    ngOnInit(): void {
        //Appel au back pour récupérer tous les posts du user
        this.postService.allPostsBySubjectsSuscribed(this.userId).subscribe(postListFromJson => {
            if (postListFromJson.length === 0) {
                this.emptyListPostMessage = "Veuillez vous abonner aux thèmes pour accéder aux articles";
            } else {
                if (Array.isArray(postListFromJson)) {
                    this.postsList = postListFromJson;
                    //Tri par défaut
                    this.sortBy();
                }
            }
        })
    }

    public sortBy(): void {
        //Tri par défaut par ordre alphabétique sur le titre
        this.postsList.sort((a, b) => {
            return this.ascend ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        });
        this.ascend = !this.ascend;
    }

    public postDetail(postId: number): void {
        this.router.navigateByUrl(`post/postDetail/${postId}`);
    }

}
