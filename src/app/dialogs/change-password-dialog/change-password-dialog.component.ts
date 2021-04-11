import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss', '../edit-profile-dialog/edit-profile-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  changePasswordForm!: FormGroup;

  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, this.passwordValidator.bind(this)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]]
    })
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.passwordRegex.test(control.value);
      return !isValid ? { invalidPassword: true } : null;
    }
    return null;
  }

  private confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = control.value === this.changePasswordForm.value.newPassword
      return !isValid ? { invalidPassword: true } : null;
    }
    return null
  }

  onSubmit() {
    console.log(this.changePasswordForm);
  }
}
