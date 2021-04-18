import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isSidenavOpen: boolean = false;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
