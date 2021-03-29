import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSidenavOpen: boolean = false
  user = {
    image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg',
    fullName: 'Nazarii Karlyk',
    badges: 5,
    xp: 110
  }


  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen
  }

  ngOnInit(): void {
  }

}
