import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  user = {
    name: 'Nazarii'
  }
  time: string = ''
  constructor() { }

  ngOnInit(): void {
    this.setTime()
  }

  setTime() {
    const times = ['morning', 'day', 'evening', 'night']
    const currentHour = new Date().getHours()

    switch(true) {
      case currentHour >= 0 && currentHour <= 5:
        this.time = times[3]
        break
      case currentHour > 5 && currentHour <= 12:
        this.time = times[0]
        break
      case currentHour > 12 && currentHour <= 18:
        this.time = times[1]
        break
      default:
        this.time = times[2]
    }
  }
}
