import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-say-thanks-dialog',
  templateUrl: './say-thanks-dialog.component.html',
  styleUrls: ['./say-thanks-dialog.component.scss', '../request-dialog/request-dialog.component.scss']
})
export class SayThanksDialogComponent implements OnInit {
  sayThanksForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sayThanksForm = this.fb.group({
      message: ['', Validators.required]
    });
  }
}
