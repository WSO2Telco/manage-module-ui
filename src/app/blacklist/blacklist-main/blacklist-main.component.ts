import { Component, OnInit } from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';

@Component({
  selector: 'app-blacklist-main',
  templateUrl: './blacklist-main.component.html',
  styleUrls: ['./blacklist-main.component.scss']
})
export class BlacklistMainComponent implements OnInit {

  apis  = {};
  api = {};
  constructor(private blackListService: BlackListRemoteDataService) { }

  ngOnInit() {

    this.api = this.blackListService.getApiList();
    console.log(this.api);

  }

  loadApis() {
    this.blackListService.getApiList();
  }

}
