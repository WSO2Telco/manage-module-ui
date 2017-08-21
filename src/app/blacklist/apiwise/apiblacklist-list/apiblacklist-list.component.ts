import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlackListService} from '../../../commons/services/blacklist.service';
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

    constructor(private blackListService: BlackListService,  private message: MessageService) {

    }

    ngOnInit(): void {
        this.datasource = [];
    }

    onDelete(msisdn: string, apiId: string) {
        if (msisdn.length != 0) {
            this.blackListService.removeBlackListNumber('tel3A%2B' + msisdn, apiId.toString(), (response, status) => {
                if (status) {
                    this.onDeleteTask.emit(true);
                    this.message.success('MSISDN Removed Successfully');
                } else {
                    this.message.error(response.message);
                }
            });
        }

    }

}

