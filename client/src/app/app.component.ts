import { Component } from '@angular/core';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private heroService: HeroService){
    console.log('App component loaded');
    
  }
}
