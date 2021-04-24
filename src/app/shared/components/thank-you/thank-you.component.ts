import { RequestDataService } from './../../services/request-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/user';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  thankUser$: Observable<User>;

  constructor(private requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.setThankUser();
  }

  setThankUser(): void {
    this.thankUser$ = this.requestDataService.getThankUser();
  }
}
