import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  token;
  constructor() { }

  onLogIn(token: any) {
    if (token && (token !== null)) {
      this.loggedIn = !this.loggedIn;
      this.token = token;
    }
  }

  IsLoggedIn(): boolean {
    return this.loggedIn;
  }

  getToken(): string {
    return this.token;
  }

}
