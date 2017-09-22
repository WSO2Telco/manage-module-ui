import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-user-inactive',
    templateUrl: './user-inactive.component.html',
    styleUrls: ['./user-inactive.component.scss']
})
export class UserInactiveComponent implements OnInit {

    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    public isModalShown: boolean = false;

    constructor(private _authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this._authenticationService.isInactive.subscribe((isInactive: boolean) => {
            if (isInactive) {
                console.log('show');
                this.showModal();
            }
        });
    }

    public showModal(): void {
        this.isModalShown = true;
    }

    public hideModal(): void {
        this.autoShownModal.hide();
    }

    public onHidden(): void {
        this.isModalShown = false;
    }

    doLogout() {
        this.hideModal();
        this._authenticationService.doLogout();
    }

}
