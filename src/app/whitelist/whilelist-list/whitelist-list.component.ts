/**
 * Created by manoj on 8/1/17.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {WhitelistService} from '../../commons/services/whitelist.service';

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


    constructor(private whitelistService: WhitelistService) {

    }

    ngOnInit() {

    }

    onDelete(msisdn: string) {
        if(msisdn.length != 0) {

            this.whitelistService.removeFromWhiteList(msisdn, (response, status) => {
                if (status) {
                    console.log('here manoj');
                    this.onDeleteTask.emit(true);
                } else {
                    console.log('error occured while deleting');

                }
            });
        }

    }
}