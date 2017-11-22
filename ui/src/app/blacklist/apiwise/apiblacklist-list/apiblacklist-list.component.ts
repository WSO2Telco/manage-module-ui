import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlackListWhiteListService} from '../../../commons/services/blacklist_whitelist.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-blacklist-list',
    templateUrl: './apiblacklist-list.component.html',
    styleUrls: ['../apiblacklist-main/apiblacklist-main.component.scss']
})

export class ApiBlacklistListComponent implements OnInit {

    @Input()
    private datasource: string[];

    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    @Input()
    private apiId: string[];

    constructor(private blackListWhiteListService: BlackListWhiteListService,  private message: MessageService) {

    }

    ngOnInit(): void {
        this.datasource = [];
    }

    onDelete(msisdn: string, apiId: string) {
        if (msisdn.length != 0) {
            this.blackListWhiteListService.removeFromBlackList('tel3A%2B' + msisdn, apiId.toString(), (response) => {
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

