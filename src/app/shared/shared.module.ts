import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { BadgesComponent } from './badges/badges.component';
import { PersonalAchievementsComponent } from './personal-achievements/personal-achievements.component';

const components = [
  AvatarComponent,
  ThankYouComponent,
  BadgesComponent,
  PersonalAchievementsComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components]
})
export class SharedModule { }
