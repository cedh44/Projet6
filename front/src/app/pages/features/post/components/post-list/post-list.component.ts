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

    //Tri des articles (du plus récent au moins récent et inversement si clic sur la flèche du tri)
    public sortBy(): void {
        if(this.ascend) this.postsList.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        else this.postsList.sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        this.ascend = !this.ascend;
    }

    //Navigation vers le détails de l'article
    public postDetail(postId: number): void {
        this.router.navigateByUrl(`post/postDetail/${postId}`);
    }

}
