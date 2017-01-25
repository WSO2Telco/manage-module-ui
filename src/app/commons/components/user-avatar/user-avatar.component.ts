import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  private dropDownStatus:{isOpen:boolean} = {isOpen:false};

  constructor(private _authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  onClick(){
       this.dropDownStatus.isOpen = !this.dropDownStatus.isOpen;
  }

  onMenuClick(type:string){
    switch (type){
      case 'logout' : {
        this._authenticationService.doLogout();
      }
    }
  }

}
