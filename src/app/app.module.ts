import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-14748169.okta.com/oauth2/default',
  clientId: '###',
  redirectUri: window.location.origin + '/login/callback'
});

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
