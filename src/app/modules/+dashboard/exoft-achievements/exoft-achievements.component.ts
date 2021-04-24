import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { RequestDataService } from './../../../shared/services/request-data.service';

import { AvatarSize } from '../../../shared/enums/avatar-size.enum';
import { AchievementsHistoryItem } from 'src/app/shared/models/achievements-history-item';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit, OnDestroy {
  achievementsHistory$: Observable<AchievementsHistoryItem[]>;
  achievementsHistorySize: number;
  achievementsData$: Subscription;
  avatarSize = AvatarSize;

  constructor(private requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.setAchievementsHistory();
  }

  ngOnDestroy(): void {
    this.achievementsData$.unsubscribe();
  }

  setAchievementsHistory(): void {
    this.achievementsHistory$ = this.requestDataService.getUsers()
      .pipe(map(users => {
        const result: AchievementsHistoryItem[] = [];

        users.forEach(user => {
          this.achievementsData$ = this.requestDataService.getUserAchievement(user.id)
            .pipe(tap(achievements => {
              achievements.forEach(achievement => {
                result.push({
                  user,
                  achievement
                });
              });
            })).subscribe();
        });

        this.achievementsHistorySize = result.length;

        return this.sortByTime(result);
      }));
  }

  sortByTime(arr: AchievementsHistoryItem[]): AchievementsHistoryItem[] {
    return arr.sort((a, b) => {
      const dateA = new Date(a.achievement.addedTime).getUTCMilliseconds();
      const dateB = new Date(b.achievement.addedTime).getUTCMilliseconds();

      return dateA - dateB;
    });
  }
}
