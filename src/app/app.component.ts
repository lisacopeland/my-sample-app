import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'AngularCalculator';
  isAuthenticated = false;

  constructor(private router: Router, public oktaAuth: OktaAuthStateService) {
    // subscribe to authentication state changes

  }
  ngOnInit() {
  console.log('hi from the app component');
  this.router.navigate(['/', 'login']);
  }


}
