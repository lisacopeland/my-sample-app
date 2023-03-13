import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { OktaAuth, Tokens } from '@okta/okta-auth-js';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaSignIn from '@okta/okta-signin-widget';

const DEFAULT_ORIGINAL_URI = window.location.origin;

@Component({
  selector: 'app-login',
  template: `
  <p>Hi from the login component!</p>
    <div id="okta-signin-container"></div>`,
  styles: []
})
export class LoginComponent implements OnInit {

  widget = new OktaSignIn({
    baseUrl: 'https://dev-14748169.okta.com',
    clientId: '###',
    redirectUri: DEFAULT_ORIGINAL_URI + '/callback'
  });

  constructor(
    @Inject(OKTA_AUTH) public oktaAuth: OktaAuth,
    private authStateService: OktaAuthStateService
  ) {
    // Show the widget when prompted, otherwise remove it from the DOM.

  }
  authState$ = this.authStateService.authState$;
  ngOnInit(): void {

    console.log('hi from ngoninit');
    this.widget.showSignInToGetTokens({
      el: '#okta-signin-container'
    }).then(async (tokens: Tokens | undefined) => {
      const originalUri = this.oktaAuth.getOriginalUri();
      if (originalUri === DEFAULT_ORIGINAL_URI) {
        this.oktaAuth.setOriginalUri('/');
      }

      // Remove the widget
      this.widget.remove();

      // In this flow the redirect to Okta occurs in a hidden iframe
      await this.oktaAuth.handleLoginRedirect(tokens);
    }).catch((err: any) => {
      // Typically due to misconfiguration
      throw err;
    });
  }
}
