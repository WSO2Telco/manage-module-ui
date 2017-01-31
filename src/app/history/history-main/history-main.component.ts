import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-main',
  templateUrl: './history-main.component.html',
  styleUrls: ['./history-main.component.scss']
})
export class HistoryMainComponent implements OnInit {

  constructor() { }

  private fieldSet=["id", "applicationName","applicationDescription","userName"];

  private historyJson = [
    {
      "id": "25382",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "11:28:28",
        "offset": "+05:30",
        "unformatted": "2017-01-30T11:28:28.840+05:30"
      },
      "taskDescription": null,
      "applicationId": "58",
      "applicationName": "Food Master",
      "applicationDescription": "Food Master",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "25466",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "12:11:59",
        "offset": "+05:30",
        "unformatted": "2017-01-30T12:11:59.029+05:30"
      },
      "taskDescription": null,
      "applicationId": "60",
      "applicationName": "Pizza Mapper",
      "applicationDescription": "Pizza Mapper\n",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "25663",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "12:17:22",
        "offset": "+05:30",
        "unformatted": "2017-01-30T12:17:22.951+05:30"
      },
      "taskDescription": null,
      "applicationId": "61",
      "applicationName": "YYY",
      "applicationDescription": "sdf",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "25714",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "12:49:10",
        "offset": "+05:30",
        "unformatted": "2017-01-30T12:49:10.009+05:30"
      },
      "taskDescription": null,
      "applicationId": "62",
      "applicationName": "Car Poker",
      "applicationDescription": "Car Poker",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "25858",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "13:00:16",
        "offset": "+05:30",
        "unformatted": "2017-01-30T13:00:16.799+05:30"
      },
      "taskDescription": null,
      "applicationId": "66",
      "applicationName": "DO",
      "applicationDescription": "DO\n",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "27534",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "14:23:02",
        "offset": "+05:30",
        "unformatted": "2017-01-30T14:23:02.476+05:30"
      },
      "taskDescription": null,
      "applicationId": "67",
      "applicationName": "Doge Finder",
      "applicationDescription": "Doge Finder",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "27570",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "14:27:34",
        "offset": "+05:30",
        "unformatted": "2017-01-30T14:27:34.502+05:30"
      },
      "taskDescription": null,
      "applicationId": "68",
      "applicationName": "Fruit Picker",
      "applicationDescription": "Fruit Picker",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "27606",
      "assignee": "admin",
      "createTime": {
        "date": "30-Jan-2017",
        "time": "14:55:35",
        "offset": "+05:30",
        "unformatted": "2017-01-30T14:55:35.474+05:30"
      },
      "taskDescription": null,
      "applicationId": "69",
      "applicationName": "Fm101",
      "applicationDescription": "F101",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    },
    {
      "id": "32534",
      "assignee": "admin",
      "createTime": {
        "date": "31-Jan-2017",
        "time": "09:40:42",
        "offset": "+05:30",
        "unformatted": "2017-01-31T09:40:42.845+05:30"
      },
      "taskDescription": null,
      "applicationId": "71",
      "applicationName": "TEST ME App",
      "applicationDescription": "TEST ME App",
      "operators": "operator1,",
      "tier": "Default",
      "tiersStr": [
        "Default",
        "Large",
        "Medium",
        "Small",
        "Unlimited"
      ],
      "userName": "admin"
    }
  ];

  ngOnInit() {
  }

}
