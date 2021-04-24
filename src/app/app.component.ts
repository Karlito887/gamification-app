import { AuthUserService } from './shared/services/auth-user.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(private authUserService: AuthUserService) {}

  ngOnDestroy(): void {
    this.authUserService.clearTokens();
  }
}
