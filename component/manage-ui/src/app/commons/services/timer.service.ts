import { Injectable } from '@angular/core';

@Injectable()
export class TimerService{
    private LOGOUT_TIMEOUT = 900000; //15 min
    private logoutTimer;

    constructor(){}

    private startTimer(){
        this.logoutTimer = setTimeout(()=>{
             this.doLogout();
         },this.LOGOUT_TIMEOUT);
     }
 
     resetLogoutTimer(){
         if(this.logoutTimer){
             clearTimeout(this.logoutTimer)
         }
         this.startTimer();
     }

     doLogout() {
        const user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        if (!!user) {
            sessionStorage.setItem('loginUserInfo', null);
            window.location.reload();
        } else {
            window.location.reload();
        }
    }

}