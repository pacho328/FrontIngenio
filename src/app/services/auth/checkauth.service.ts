import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

  constructor() { }

  public isAuthenticated() {
    const token = localStorage.getItem("authToken");
    if(token){
      const payload = atob(token.split(".")[1])
      const parsedPayload = JSON.parse(payload);
      return parsedPayload.exp > Date.now() / 1000;
    }else{
      return false
    }
    
  }
}
