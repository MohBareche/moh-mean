import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h3>{{ myHero.name }}</h3>
      <ul>
        <li *ngFor="let hero of heroes"> {{ hero.name }} </li>
      </ul>

      
      <p *ngIf=" heroes.length > 3 "> There are more heros </p>
      
      <h3>Interpolation</h3>
      {{1 + 2 + getValue() }}

    </div>

    <tr>
      <td [attr.colspan]="colSpan">Coucou</td>
    </tr>

    <div>
    <p>Hello {{ myHero.name }}
        bienvenue dans la 
          formation de Angular 8
            avec Malik
    </p>

      <img src = "{{ imageUrl }}">
      <img [src] = "imageUrl">
    </div>
  `,
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  title: string;
  imageUrl: string;
  myHero: Hero

  heroes = [
    new Hero(1, 'John'),
    new Hero(2, 'Doe'),
    new Hero(3, 'Kevin'),
    new Hero(4, 'Moh')
  ];

  getValue() {
    return 17;
  }
  constructor() {
    this.myHero = this.heroes[2];
    console.log(this.myHero);
    this.title = 'Hero List';
    this.imageUrl = 'http://lorempixel.com/400/200/sports';
  }

  ngOnInit() {
  }

}
