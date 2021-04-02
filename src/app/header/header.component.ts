import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSidenavOpen: boolean = false
  user = {
    image: '../../assets/CJ.jpg',
    firstName: 'Nazarii',
    lastName: 'Karlyk',
    badges: 5,
    xp: 110
  }

  get fullName(): string {
    return this.user.firstName + ' ' + this.user.lastName
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen
  }

  ngOnInit(): void {
  }

}
