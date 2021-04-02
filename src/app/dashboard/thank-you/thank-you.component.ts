import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  thankUser = {
    fullName: 'Carl Jhonson',
    firstName: 'Carl',
    lastName: 'Jhonson',
    image: '',
  }
}
