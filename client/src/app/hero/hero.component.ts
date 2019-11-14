import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    title = 'Hero Title Component';
    hero = { name: 'Mohamed Barèche', salary: 50000.35, joinDate: Date.now() };
    imgUrl = '../../assets/images/google.jpg';
    heros: any;


    codeService = `
        Ajouter le service dans le module: app.module.ts [providers]
        
        Exemple d'injection du service :
    
        constructor(private heroService: HeroService) {
            this.heros = this.heroService.getHeroes();
        }
    `;

    codeTemplate = `
        ng g c nameOfComponent -it -is --skipTests
    `;

    currentStyles = {
        'font-weight': 'bold',
        'text-align': 'center'
    }


    onClickHandler(hero) {
        console.log(hero);
        alert(hero.name);
    }



    constructor(private heroService: HeroService) {
        
    }


    ngOnInit() {

    }


}