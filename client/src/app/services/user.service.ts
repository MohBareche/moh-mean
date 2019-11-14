import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as AppUtil from "../common/app.util";

@Injectable({
  providedIn: "root"
})
export class UserService {
  endpointCreate = 'api/users/register';
  endpointAuth = 'api/users/login';

  constructor(private httpClient: HttpClient) {}

  // Create a new user
  createAccount(user): Observable<any> {
    return this.httpClient.post(this.endpointCreate, user);
  }

  // Login a user
  auth(user): Observable<any> {
    return this.httpClient.post(this.endpointAuth, user);
  }

  saveUserData(token, user) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    //  angular2-jwt
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN)
  }

  logOut() {
    localStorage.removeItem(AppUtil.AUTH_TOKEN);
    localStorage.removeItem(AppUtil.USER_INFO);
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO))
  }

}
