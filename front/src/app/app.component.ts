import { Component } from '@angular/core';
import {AuthService} from "./pages/features/auth/services/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "./pages/core/services/session.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  constructor(
      private authService: AuthService,
      private router: Router,
      private sessionService: SessionService) {
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }
}
