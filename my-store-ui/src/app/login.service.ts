import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:string;
  pw:string = "password";

  constructor() { }

  onSubmit(user:string, pw:string, status:string) {
    this.user=user;
    if(status !=="VALID"){
      alert("Status is " + status + ". Required input not supplied.");
    } else if(pw === this.pw){
      alert(user + " successfully logged in.");
    } else{
      alert("Incorrect password.");
    }
  }

}
