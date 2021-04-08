import { User } from './../../models/user';
import { AuthUserService } from './../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user!: User;
  constructor(private authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.user = this.authUserService.getUser();
  }

}
