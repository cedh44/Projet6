import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../core/services/subject.service";
import {SessionService} from "../../../core/services/session.service";
import {PostService} from "../../post/services/post.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShowMenuMobile: boolean = false;
  constructor(private sessionService: SessionService) {
  }



  ngOnInit(): void {
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }

  //Boolean qui sert pour affichage du menu normal ou menu mobile (responsive)
  public showMenuMobile(): void{
    this.isShowMenuMobile = ! this.isShowMenuMobile;
  }



}
