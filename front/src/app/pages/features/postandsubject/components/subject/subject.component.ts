import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject.models";
import {UserSession} from "../../../../models/userSession.models";
import {SessionService} from "../../../../services/session.service";

@Component({
    selector: 'app-subjects',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

    //Appel au back pour récupérer tous les subjects
    public subjects$!: Observable<Subject[]>;
    public userId: number;

    constructor(private subjectService: SubjectService,
                private sessionService: SessionService,
                ) {
        this.userId = this.sessionService.userSession!.id;
    }

    //On récupère les information de la session utilisateur
    //TODO : à supprimer si inutilisé
    get userSession(): UserSession | undefined {
        return this.sessionService.userSession;
    }

    ngOnInit(): void {
        //Appel au back pour récupérer tous les subjects
        this.subjects$ = this.subjectService.all();
    }

    //User logué est abonné au sujet ?
    public isSubscribedSubject(subject: Subject): boolean {
        const idUser = subject.users?.find(user =>
            user == this.userId
        );
        return idUser != null;
    }

    public subscribe(idSubject: number): void {
        this.subjectService.subscribeSubject(idSubject, this.userId).subscribe( _=> {
            //On réactualise la page des subjects
            this.subjects$ = this.subjectService.all();
        });
    }

    public unSubscribe(idSubject: number): void {
        this.subjectService.unSubscribeSubject(idSubject, this.userId).subscribe(_ => {
            //On réactualise la page des subjects
            this.subjects$ = this.subjectService.all();
        });
    }


}
