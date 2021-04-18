import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './components/avatar/avatar.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { BadgesComponent } from './components/badges/badges.component';
import { PersonalAchievementsComponent } from './components/personal-achievements/personal-achievements.component';
import { EditProfileDialogComponent } from './dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { ChangePasswordDialogComponent } from './dialogs/change-password-dialog/change-password-dialog.component';
import { RequestDialogComponent } from './dialogs/request-dialog/request-dialog.component';
import { UserProfileDialogComponent } from './dialogs/user-profile-dialog/user-profile-dialog.component';
import { SayThanksDialogComponent } from './dialogs/say-thanks-dialog/say-thanks-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  AvatarComponent,
  ThankYouComponent,
  BadgesComponent,
  PersonalAchievementsComponent,
  RequestDialogComponent,
  UserProfileDialogComponent,
  SayThanksDialogComponent,
  EditProfileDialogComponent,
  ChangePasswordDialogComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
],
  exports: [components]
})
export class SharedModule { }
