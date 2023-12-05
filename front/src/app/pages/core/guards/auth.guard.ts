import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from "../services/session.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private sessionService: SessionService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //Si l'utilisateur n'est pas connecté alors retour forcé vers la page de login
        if (!this.sessionService.isLogged) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}