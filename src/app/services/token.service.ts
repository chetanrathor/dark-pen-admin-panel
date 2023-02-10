import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    let token = window.sessionStorage.getItem('token');
   if(token)
   {
    
      return token;
   }
   else{
    return
   }

  }
}
