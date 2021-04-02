import { BadgesPageComponent } from './badges-page/badges-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

const routes = [
  {
    path: '',
    component: BadgesPageComponent
  }
];

@NgModule({
  declarations: [BadgesPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class BadgesPageModule { }
