import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlackListWhiteListService } from '../../../commons/services/blacklist_whitelist.service';
import { MessageService } from '../../../commons/services/message.service';

@Component({
    selector: 'app-blacklist-list',
    templateUrl: './apiblacklist-list.component.html',
    styleUrls: ['../apiblacklist-main/apiblacklist-main.component.scss']
})

export class ApiBlacklistListComponent implements OnInit {

    @Input()
    private datasource: string;

    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    @Input()
    private apiId: string[];

    @Input()
    private selcetedAppId: string;

    @Input()
    private spName: string;


    constructor(private blackListWhiteListService: BlackListWhiteListService, private message: MessageService) {

    }

    ngOnInit(): void {
    }

    onDelete(msisdn: string) {
        if (msisdn.length != 0) {
            this.blackListWhiteListService.removeFromBlackList(msisdn, this.selcetedAppId.toString(), this.apiId.toString(), this.spName.toString(),'blacklist', (response) => {
                if (response.success) {
                    this.onDeleteTask.emit(true);
                    this.message.success(response.message);
                } else {
                    this.message.error(response);
                }
            });
        }

    }

}

