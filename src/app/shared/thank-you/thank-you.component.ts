import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  thankUser: User;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.thankUser = this.usersService.getUsers().sort((a, b) => b.xp - a.xp)[0];
  }
}
