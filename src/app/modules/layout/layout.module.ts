import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes = [
  {
    path: '',
    component: LayoutComponent,
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent
]
})
export class LayoutModule { }
