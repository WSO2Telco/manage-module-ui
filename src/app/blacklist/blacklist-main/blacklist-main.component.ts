import { Component, OnInit } from '@angular/core';
import { BlackListService} from '../../commons/services/blacklist.service';


@Component({
  selector: 'app-blacklist-main',
  templateUrl: './blacklist-main.component.html',
  styleUrls: ['./blacklist-main.component.scss']
})


export class BlacklistMainComponent implements OnInit {

  private submissionError: string;

  private apis: {
      apiName: string,
      operator: string
  };

  private operator: string;
  private apiName;
  private apiArray: string[];
  private apiId: string;

  constructor(private blackListService: BlackListService) {


  }

  ngOnInit() {

      this.submissionError = '';
      this.loadApis();
  }


  loadApis() {
    this.blackListService.getApiList((response) => {
         this.apis = response;


        // for (const _i of this.apiArray) {
        for (let _i = 0; _i < response.length ; _i++) {
            // this.apiArray = response.toString().split(':').slice(3);
            this.apis = response .toString().split(':');
            console.log(this.apis);


            // this.apiId = this.apiArray[_i];
            // console.log(this.apiId);
        }

          // this.apiArray = response.toString().split(':');
          // this.apis.apiName = this.apiArray[0];
         // response = response.toString().replace(/^(.*?):*$/, '$1');
         // this.apis.operator = response.split(`:`, 1);
         // this.apiName = response;
         // this.apis.apiName = response.toString().match(/:[^]*/);
        // console.log(JSON.stringify(this.apiArray));

        console.log(this.apiId);
        });
  }


}
