import { User } from './../../models/user';
import { AuthUserService } from './../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {
  editProfileForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder,
    private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: [''],
    });

    this.user = this.authUserService.getUser();


  }

  onSubmit() {
    console.log(this.editProfileForm.value);
  }

}
