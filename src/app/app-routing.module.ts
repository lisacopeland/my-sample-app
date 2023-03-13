import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OktaAuthGuard, OktaAuthStateService, OktaCallbackComponent } from '@okta/okta-angular';
import { SamplecompComponent } from './samplecomp/samplecomp.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent }

];

/* export function onAuthRequired(oktaAuth: OktaAuthStateService, injector: Injector): void {
  const router = injector.get(Router);
  router.navigate(['/login']);
} */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
