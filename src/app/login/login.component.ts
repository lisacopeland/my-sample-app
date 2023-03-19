import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { OktaAuth, Tokens } from '@okta/okta-auth-js';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaSignIn from '@okta/okta-signin-widget';
import config from '../app.config';
import { AuthService } from '../auth.service';

const DEFAULT_ORIGINAL_URI = window.location.origin;

@Component({
  selector: 'app-login',
  template: ` <p>Hi from the login component!</p>
    <div id="okta-signin-container"></div>`,
  styles: [],
})
export class LoginComponent implements OnInit {
  widget = new OktaSignIn({
    baseUrl: 'https://dev-14748169.okta.com',
    clientId: config.oidc.clientId,
    redirectUri: config.oidc.redirectUri,
    i18n: {
      en: {
        'primaryauth.title': 'Sign in to Lisa Angular & Company',
      },
    },
    useInteractionCodeFlow: true
  });

  constructor(
    @Inject(OKTA_AUTH) public oktaAuth: OktaAuth,
    private authStateService: OktaAuthStateService,
    private authService: AuthService,
    private router: Router
  ) {
    // Show the widget when prompted, otherwise remove it from the DOM.
  }
  authState$ = this.authStateService.authState$;
  ngOnInit(): void {
    console.log('hi from ngoninit');
     this.widget
      .showSignInToGetTokens({
        el: '#okta-signin-container'
      })
      .then(async (tokens: Tokens) => {
        // Remove the widget
        this.widget.remove();
        console.log('im logged in!');
        this.authService.onLogIn(tokens.accessToken)
        this.router.navigate(['home']);
        // In this flow the redirect to Okta occurs in a hidden iframe
        // await this.oktaAuth.handleLoginRedirect(tokens);
      })
      .catch((err: any) => {
        console.log('got an err: ', err.messages);
        // Typically due to misconfiguration
        throw err;
      });
  }


}
