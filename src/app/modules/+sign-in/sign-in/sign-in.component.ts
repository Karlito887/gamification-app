import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthUserService } from '../../../shared/services/auth-user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authUserService: AuthUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.authUserService.authenticate(this.signInForm.value)
    .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
