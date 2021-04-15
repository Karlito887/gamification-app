import { AvatarSize } from './../../enums/avatar-size.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthUserService } from './../../services/auth-user.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {
  editProfileForm: FormGroup;
  user: User;
  avatarSize = AvatarSize;

  constructor(private fb: FormBuilder,
    private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.setForm();
    this.user = this.authUserService.getUser();
  }

  setForm(): void {
    this.editProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: [''],
    });
  }

  onSubmit(): void {
    // temporary empty func
  }
}
