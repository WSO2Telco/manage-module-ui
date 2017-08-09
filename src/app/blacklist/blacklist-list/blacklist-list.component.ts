/**
 * Created by rajithk on 8/2/17.
 */

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlackListService} from '../../commons/services/blacklist.service';

@Component({
    selector: 'app-blacklist-list',
    templateUrl: './blacklist-list.component.html',
    styleUrls: ['../blacklist-main/blacklist-main.component.scss']
})

export class BlacklistListComponent implements OnInit {

    @Input()
    private  datasource: string[];

    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    @Input()
    private apiId: string[];

    constructor(private blackListService: BlackListService) {

    }

    ngOnInit(): void {

    }

    onDelete(msisdn: string, apiId: string) {
        if (msisdn.length != 0) {
            this.blackListService.removeBlackListNumber('tel3A%2B' + msisdn, apiId.toString(), (response) => {
                console.log('called on Delete');
                    this.onDeleteTask.emit(true);
            });
        }

    }

}

