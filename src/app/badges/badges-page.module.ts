import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';

import { BadgesPageComponent } from './badges-page/badges-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AchievementsListComponent } from './achievements-list/achievements-list.component';

const routes = [
  {
    path: '',
    component: BadgesPageComponent
  }
];

@NgModule({
  declarations: [BadgesPageComponent, UserInfoComponent, AchievementsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BadgesPageModule { }
