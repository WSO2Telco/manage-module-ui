import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlackListWhiteListService} from '../../../commons/services/blacklist_whitelist.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-blacklist-list',
    templateUrl: './apiblacklist-list.component.html',
    styleUrls: ['../apiblacklist-main/apiblacklist-main.component.scss']
})

export class ApiBlacklistListComponent implements OnInit {

    @Input() datasource: string[];

    @Output() onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    @Input() apiId: string[];

    constructor(private blackListWhiteListService: BlackListWhiteListService,  private message: MessageService) {

    }

    ngOnInit(): void {
        this.datasource = [];
    }

    onDelete(msisdn: string, apiId: string) {
        if (msisdn.length != 0) {
            this.blackListWhiteListService.removeFromBlackList(msisdn, apiId.toString(), (response) => {
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

