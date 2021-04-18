import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ExoftAchievementsComponent } from './exoft-achievements/exoft-achievements.component';
import { TopChartComponent } from './top-chart/top-chart.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { SharedModule } from '../shared/shared.module';
import { RequestDialogComponent } from '../dialogs/request-dialog/request-dialog.component';

const routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [DashboardComponent, GreetingComponent, ExoftAchievementsComponent,
    TopChartComponent, ChallengesComponent],
  entryComponents: [RequestDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
