import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {AppHistory, ApplicationHistory, ApprovalHistoryFilter} from '../../models/reporing-data-models';
import {Router} from '@angular/router';

@Component({
    selector: 'app-responsive-table',
    templateUrl: './responsive-table.component.html',
    styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

    @Input()
    private tableHeader: string;

    @Input()
    private dataSource: AppHistory[];

    @Input()
    private fieldSet: string[];

    @Input()
    private filter: ApprovalHistoryFilter;

    @Output()
    private applicationDetail: ApplicationHistory;

    @Output()
    private onFilterChange: EventEmitter<ApprovalHistoryFilter> = new EventEmitter();

    private operatorApprovals: ApplicationHistory[];
    private subscriptions: ApplicationHistory[];

    private isFilterVisible: boolean;
    private filterString: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.dataSource = [];
        this.applicationDetail = null;
        this.operatorApprovals = [];
        this.subscriptions = [];
        this.isFilterVisible = true;
        this.filterString = '';
    }

    onNavApplication(id: number) {
        this.router.navigateByUrl('/history/application/' + id);
    }

    onFilterItemAdded() {
        this.filter.filterString = this.filterString;
        this.onFilterChange.emit(this.filter);
    }

    onClear() {
        this.filterString = '';
        this.filter.filterString = this.filterString;
        this.onFilterChange.emit(this.filter);
    }
}
