import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SayThanksDialogComponent } from '../say-thanks-dialog/say-thanks-dialog.component';

import { RequestDataService } from './../../services/request-data.service';
import { AuthUserService } from '../../services/auth-user.service';

import { AchievementsGroup } from '../../models/achievements-group';
import { Achievement } from './../../models/achievement';
import { AvatarSize } from './../../enums/avatar-size.enum';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss', '../request-dialog/request-dialog.component.scss']
})
export class UserProfileDialogComponent implements OnInit {
  avatarSize = AvatarSize;
  isMe$: Observable<boolean>;
  achievements$: Observable<AchievementsGroup[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    private matDialog: MatDialog,
    private authUserService: AuthUserService,
    private requestDataService: RequestDataService
  ) { }

  ngOnInit(): void {
    this.isAuthUserCheck();
    this.setUserAchievements();
  }

  setUserAchievements(): void {
    this.achievements$ = this.requestDataService.getUserAchievement(this.user.id)
      .pipe(map(this.createAchievementsGroup));
  }

  createAchievementsGroup(avhievements: Achievement[]): AchievementsGroup[] {
    const result: AchievementsGroup[] = [];

    avhievements.forEach(item => {
      const obj: AchievementsGroup = {
        count: 1,
        achievementId: item.achievementId,
        achievement: item
      };

      if (result.length === 0) {
        result.push(obj);
      } else {
        if (result.some(el => {
          if (el.achievementId === item.achievementId) {
            el.count ++;

            return true;
          }
          return false;
          })) {
        } else result.push(obj);
      }
    });

    return result;
  }

  isAuthUserCheck(): void {
    this.isMe$ = this.authUserService.user$.pipe(map(u => u.id === this.user.id));
  }

  sayThanks(): void {
    this.matDialog.open(SayThanksDialogComponent);
  }
}
