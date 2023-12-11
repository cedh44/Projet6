import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../core/services/session.service";

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

    //Boolean qui sert pour affichage du menu normal ou menu mobile (responsive)
    public showMenuMobile(): void {
        this.isShowMenuMobile = !this.isShowMenuMobile;
    }
}
