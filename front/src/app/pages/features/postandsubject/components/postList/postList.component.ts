import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.models";
import {SessionService} from "../../../../services/session.service";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-post',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.scss']
})
export class PostListComponent implements OnInit {

    public postsList!: Post[];
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
            if (Array.isArray(postListFromJson)) {
                this.postsList = postListFromJson;
                this.sortBy();
            }
        })
    }

    public sortBy(): void {
        if (this.ascend) {
            this.ascend = false;
            this.postsList.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
        } else {
            this.ascend = true;
            this.postsList.sort((a, b) => {
                return b.title.localeCompare(a.title);
            });
        }
    }

    public createPost(): void{
        this.router.navigateByUrl('/createPost');
    }



}
