import { User } from './../../models/user';
import { AuthUserService } from './../../services/auth-user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  @Input() title: string = '';
  @Input() showXp!: boolean;

  user!: User;
  constructor(public authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }

}
