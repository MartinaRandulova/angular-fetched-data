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



}
