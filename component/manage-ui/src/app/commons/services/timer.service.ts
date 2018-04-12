import { Injectable } from '@angular/core';

@Injectable()
export class TimerService{
    private LOGOUT_TIMEOUT = 900000; //15 min
    private logoutTimer;

    constructor(){}

    private startTimer(){
      //  console.log('hit 2nd');
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

    // Given a cookie key `name`, returns the value of
// the cookie or `null`, if the key is not found.
    getCookie(name: string): string {
    const nameLenPlus = (name.length + 1);
    return document.cookie
            .split(';')
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, nameLenPlus) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;
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