/**
 * Created by manoj on 8/1/17.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {WhitelistService} from '../../commons/services/whitelist.service';
import {MessageService} from "../../commons/services/message.service";

@Component({
    selector: 'app-whitelist-list',
    templateUrl: './whitelist-list.component.html',
    styleUrls: ['./whitelist-list.component.scss']
})

export class WhitelistListComponent implements OnInit {

    @Input()
    private dataSource: string[];


    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();


    constructor(private whitelistService: WhitelistService, private message: MessageService) {

    }

    ngOnInit() {

    }

    onDelete(msisdn: string) {
        if (msisdn.length != 0) {

            this.whitelistService.removeFromWhiteList(msisdn, (response, status) => {
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