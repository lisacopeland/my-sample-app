import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { SamplecompComponent } from './samplecomp/samplecomp.component';
const appRoutes: Routes = [
  {
    path: '',
    component: SamplecompComponent,
  },
  {
    path: 'home',
    component: SamplecompComponent,
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
