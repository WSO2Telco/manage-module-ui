/**
 * Created by manoj on 8/1/17.
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlackListWhiteListService } from '../../commons/services/blacklist_whitelist.service';
import { MessageService } from '../../commons/services/message.service';

@Component({
    selector: 'app-whitelist-list',
    templateUrl: './whitelist-list.component.html',
    styleUrls: ['./whitelist-list.component.scss']
})

export class WhitelistListComponent implements OnInit {

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

    onDelete(msisdn: string, selcetedAppId: string, apiId: string, spName: string) {
        if (msisdn.length != 0) {
            this.blackListWhiteListService.removeFromBlackList(msisdn, selcetedAppId.toString(), apiId.toString(), spName.toString(),'whitelist', (response) => {
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
