import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl : string;

  constructor(private http: HttpClient) {
      this.userUrl = "http://localhost:8080/user";
   }

  public save(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(this.userUrl + " " + user);
    return this.http.post<User>(this.userUrl, user).subscribe();
  }
}
