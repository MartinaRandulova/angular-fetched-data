import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes: Hero[] = [];

  constructor (private HeroService: HeroService, private MessageService: MessageService) {  }

  ngOnInit():void {
    this.getHeroes();    
  }

  onSelect = (hero: Hero) => {
    this.MessageService.add('You have selected hero ' + hero.name)
    
  }
  getHeroes = ():void => {
   this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes); 
  }

  add(name: string): void {
    name = name.trim();
    if (name === '') {return}
    else {
    this.HeroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero))
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.HeroService.deleteHero(hero.id).subscribe()
  }

}
