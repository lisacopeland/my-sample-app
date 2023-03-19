import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-samplecomp',
  templateUrl: './samplecomp.component.html',
  styleUrls: ['./samplecomp.component.scss'],
})
export class SamplecompComponent implements OnInit {
  constructor(
    private authStateService: OktaAuthStateService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    @Inject(OKTA_AUTH) private oktaAuth : OktaAuth
  ) {}
  authState$ = this.authStateService.authState$;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        console.log('params');
      })
 

    this.oktaAuth.isAuthenticated().then((data) => {
      console.log('is authenticated ', data);
    });
    if (this.authService.IsLoggedIn()) {
      console.log('from sample comp, im logged in');
    } else {
      console.log('sample comp: im not logged in, routing');
      this.router.navigate(['login']);
    }
  }

  onLogout() {
    this.oktaAuth.signOut();
  }
}
