import { GraphModel } from './../../models/graph.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  public totalXp: number = 0
  public maxWidth: number = 160



  users: GraphModel[] = [
    {
      firstName: 'Big',
      lastName: 'Smoke',
      image: '',
      xp: 120,
      color: 'purple'
    },
    {
      firstName: 'Frank',
      lastName: 'Tanpeny',
      image: '',
      xp: 90,
      color: 'blue'
    },
    {
      firstName: 'Carl',
      lastName: 'Jhonson',
      image: '',
      xp: 80,
      color: 'green'
    },
    {
      firstName: 'Woozy',
      lastName: 'Moo',
      image: '',
      xp: 30,
      color: 'black'
    },
    {
      firstName: 'Cezar',
      lastName: 'Veliapano',
      image: '',
      xp: 0,
      color: 'coral'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.buildGraph()
    console.log(this.users);

  }

  buildGraph() {
    this.users.forEach(element => {
      this.totalXp += element.xp;
    });

    this.users.forEach(element => {
      element.size = Math.round((element.xp * this.maxWidth)/this.totalXp) + '%';
    });
  }

}
