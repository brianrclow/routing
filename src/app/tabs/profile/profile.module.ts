import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AboutMeComponent } from './about-me/about-me.component';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CommunityComponent } from './community/community.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { PasswordSettingsComponent } from './password-settings/password-settings.component';

@NgModule({
  imports: [NativeScriptCommonModule, ProfileRoutingModule],
  declarations: [ProfileComponent, AboutMeComponent, CommunityComponent, EmailSettingsComponent, PasswordSettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}
