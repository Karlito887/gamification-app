import { Component, OnInit } from '@angular/core';

import { AuthUserService } from './../../services/auth-user.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  user: User;
  time: string;

  constructor(private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
    this.setTime();
  }

  setTime(): void {
    const times = ['morning', 'day', 'evening', 'night'];
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour <= 5) {
      this.time = times[3];
    } else if (currentHour > 5 && currentHour <= 12) {
      this.time = times[0];
    } else if (currentHour > 12 && currentHour <= 18) {
      this.time = times[1];
    } else this.time = times[2];
  }
}
