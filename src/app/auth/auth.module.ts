import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  bootstrap: [AuthComponent],
  imports: [AuthRoutingModule],
  declarations: [AuthComponent, LoginComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
