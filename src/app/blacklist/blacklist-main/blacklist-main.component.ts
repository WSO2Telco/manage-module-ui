import { Component, OnInit } from '@angular/core';
import { BlackListService} from '../../commons/services/blacklist.service';
import {BlackListNumbers} from '../../commons/models/common-data-models';
import {TypeaheadMatch} from 'ng2-bootstrap';

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


  private apiId: string;
  private Numbers: string[];
  private apiList: string[];
  private applications: BlackListNumbers[];
  private api;
  public selected: string;


  constructor(private blackListService: BlackListService) {


  }

  ngOnInit() {

      this.getApis();
      this.submissionError = '';
      this.apiList = [];
      this.applications = [];
      this.Numbers = [];
      this.api = '';
      this.apiId = '';

  }

    getBlackListNumbers(Id: string) {
        this.blackListService.getBlackListNumberList( Id , (response) => {
            this.Numbers = response.Success.variables;

            let count = 0;
            for (const entry of this.Numbers){
                entry.split(',');
                count += 1;
            }
        });
    }


    // urlDecode(numbers) {
    //     let count = 0;
    //     for (numbers of this.Numbers) {
    //         console.log(numbers)
    //             if (numbers.startsWith('tel3A+')) {
    //                 // numbers[num] = numbers[num].replace('tel3A+', '');
    //             }
    //
    //
    //
    //
    //     }
    //     return numbers;
    // }


    getApis() {
        this.blackListService.getApiList((response) => {
            this.apiList = response;
            let count = 0;
            for (const entry of this.apiList){
                const splitted = entry.split(':', 4);
                this.applications[count] = new BlackListNumbers;
                this.applications[count].id = splitted[3];
                this.applications[count].name =  splitted[1];
                this.apiList[count] = splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0] + ' ' + splitted[3];
                // this.apiList[count] = splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0];
                count +=  1;
            }
        });
    }

    onApiSelected(event: TypeaheadMatch) {

        const splited =  this.api.split(' ');
        let id = '';

        for (const entry of this.applications) {

            if (entry.name == splited[0]) {
                id= entry.id;
            }
        }
        if(id.length != 0){
            this.getBlackListNumbers(id);
        }

    }



}
