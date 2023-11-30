import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor (private HeroService: HeroService) {  }

  ngOnInit():void {
    this.getHeroes();    
  }

  onSelect = (hero: Hero) => {
    this.selectedHero = hero;
  }
  getHeroes = ():void => {
   this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes); 
  }



}
