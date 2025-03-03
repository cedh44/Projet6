import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SessionService} from '../services/session.service';

@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private sessionService: SessionService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (this.sessionService.isLogged) { //Si user logué, on ajoute le bearer token dans Authorization des headers de la requêtes
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.sessionService.userSession!.token}`,
                },
            });
        }

        return next.handle(request);
    }
}
