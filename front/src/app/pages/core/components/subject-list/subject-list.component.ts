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
  public userId: number;

  constructor(private subjectService: SubjectService,
              private sessionService: SessionService) {
    this.userId = this.sessionService.userSession!.id;
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
    this.subjectService.subscribeSubject(idSubject, this.userId).subscribe(_ => {
      //On rafraichit le composant
      this.ngOnInit();
    });
  }

  public unSubscribe(idSubject: number): void {
    this.subjectService.unSubscribeSubject(idSubject, this.userId).subscribe(_ => {
      //On rafraichit le composant
      this.ngOnInit();
    });
  }
}
