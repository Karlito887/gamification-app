import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { PersonalAchievementsComponent } from './personal-achievements/personal-achievements.component';
import { ExoftAchievementsComponent } from './exoft-achievements/exoft-achievements.component';
import { BadgesComponent } from './badges/badges.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TopChartComponent } from './top-chart/top-chart.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { CoreModule } from '../core/core.module';
import { RequestDialogComponent } from '../dialogs/request-dialog/request-dialog.component';
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [DashboardComponent, GreetingComponent,
    PersonalAchievementsComponent, ExoftAchievementsComponent, BadgesComponent,
    ThankYouComponent, TopChartComponent, ChallengesComponent],
  entryComponents: [RequestDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
