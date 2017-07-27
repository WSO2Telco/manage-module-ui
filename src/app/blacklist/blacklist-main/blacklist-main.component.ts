import { Component, OnInit } from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';
import {BlackListService} from "../../commons/services/blacklist.service";

@Component({
  selector: 'app-blacklist-main',
  templateUrl: './blacklist-main.component.html',
  styleUrls: ['./blacklist-main.component.scss']
})
export class BlacklistMainComponent implements OnInit {

  apis  = {};
  api = {};
  constructor(private blackListService: BlackListService) { }

  ngOnInit() {
    console.log(this.blackListService.getApiList());
  }

  loadApis() {
    this.blackListService.getApiList();
  }

}
