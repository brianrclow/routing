import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ProfileComponent } from './profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommunityComponent } from './community/community.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { PasswordSettingsComponent } from './password-settings/password-settings.component';

const routes: Routes = [
  { path: 'default', component: ProfileComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'email-settings', component: EmailSettingsComponent },
  { path: 'password-settings', component: PasswordSettingsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ProfileRoutingModule {}
