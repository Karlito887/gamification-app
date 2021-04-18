import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RequestDialogComponent } from './dialogs/request-dialog/request-dialog.component';
import { UserProfileDialogComponent } from './dialogs/user-profile-dialog/user-profile-dialog.component';
import { SayThanksDialogComponent } from './dialogs/say-thanks-dialog/say-thanks-dialog.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { EditProfileDialogComponent } from './dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { ChangePasswordDialogComponent } from './dialogs/change-password-dialog/change-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RequestDialogComponent,
    UserProfileDialogComponent,
    SayThanksDialogComponent,
    SidenavComponent,
    ToolbarComponent,
    EditProfileDialogComponent,
    ChangePasswordDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
