import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Subject} from "../../models/subject.models";
import {SubjectService} from "../../services/subject.service";
import {SessionService} from "../../services/session.service";

@Component({
    selector: 'app-subject-list',
    templateUrl: './subject-list.component.html',
    styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

    @Input() fromSubjectComponent!: boolean;
    public subjects$!: Observable<Subject[]>;
    public subjectsNouvelleVersion$!: Observable<Subject[]>;
    public userId: number;
    public emptyListPostMessage: string = '';

    constructor(private subjectService: SubjectService,
                private sessionService: SessionService) {
        this.userId = this.sessionService.userSession!.id;
    }

    ngOnInit(): void {
        if (this.fromSubjectComponent) {
            //L'utilisateur est sur la page des thèmes, il faut afficher les thèmes où il n'est pas encore abonné
            this.subjectsNouvelleVersion$ = this.subjectService.allNotSubscribedSubjects(this.userId);
            this.subjectsNouvelleVersion$.subscribe(subjectListFromJson => {
                if (subjectListFromJson.length === 0) this.emptyListPostMessage = "Vous êtes abonné à tous les thèmes";
            })
        } else {
            //L'utilisateur est sur la page de profil, il faut afficher les thèmes auxquels il est abonné
            this.subjectsNouvelleVersion$ = this.subjectService.allSubscribedSubjects(this.userId);
            this.subjectsNouvelleVersion$.subscribe(subjectListFromJson => {
                if (subjectListFromJson.length === 0) this.emptyListPostMessage = "Vous n'êtes abonné à aucun thème";
            })
        }
    }

    //Abonnement au thème
    public subscribe(idSubject: number): void {
        this.subjectService.subscribeSubject(idSubject, this.userId).subscribe(_ => {
            //On rafraichit le composant
            this.ngOnInit();
        });
    }

    //Désabonnement au thème
    public unSubscribe(idSubject: number): void {
        this.subjectService.unSubscribeSubject(idSubject, this.userId).subscribe(_ => {
            //On rafraichit le composant
            this.ngOnInit();
        });
    }
}
