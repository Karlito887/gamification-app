import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {
  personalAchievemets = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg',
      title: 'Exoft tutbo power',
      time: '0 mins ago',
      point: 10
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg',
      title: 'Exoft tutbo power',
      time: '0 mins ago',
      point: 20
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg',
      title: 'Exoft tutbo power',
      time: '1 mins ago',
      point: 10
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Head.cj.jpg/274px-Head.cj.jpg',
      title: 'Exoft tutbo power',
      time: '30 mins ago',
      point: 40
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
