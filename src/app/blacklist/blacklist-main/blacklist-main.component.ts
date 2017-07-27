import { Component, OnInit } from '@angular/core';
import { BlackListService} from '../../commons/services/blacklist.service';


@Component({
  selector: 'app-blacklist-main',
  templateUrl: './blacklist-main.component.html',
  styleUrls: ['./blacklist-main.component.scss']
})


export class BlacklistMainComponent implements OnInit {

  private submissionError: string;
  constructor(private blackListService: BlackListService) {

  }

  ngOnInit() {

      this.submissionError = '';
  }

  loadApis() {
    this.blackListService.getApiList((errorMsg) => {
          this.submissionError = errorMsg;
          setTimeout(() => {
            this.submissionError = null;
          }, 5000);
        });
  }

}
