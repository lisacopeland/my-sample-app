import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'AngularCalculator';
  isAuthenticated = false;

  constructor(private router: Router,  @Inject(OKTA_AUTH) private oktaAuth : OktaAuth) {

  }
  ngOnInit() {
  }


}
