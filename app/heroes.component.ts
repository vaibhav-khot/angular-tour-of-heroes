import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  //templateUrl: './app/template/herodetails.html',
  templateUrl: './app/template/herodetails1.html',
  styleUrls:['./app/styles/style.css'],
  providers : [HeroService]

})
export class HeroesComponent implements OnInit{

  title = 'Tour of Heroes';
  heroes :Hero[];
  selectedHero:Hero;
  constructor(private heroService : HeroService){}

  ngOnInit():void {
  this.getHeroes();
  console.log("ngOnInit");
  console.log(this);
  }

  getHeroes():void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    console.log("getHeroes");
    console.log(this);
    }


    onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}
