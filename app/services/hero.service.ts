import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable(

)

export class HeroService {

  //ECMA Script 6 Way
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
//   getHeroesSlowly(): Promise<Hero[]> {
//   return new Promise<Hero[]>(resolve =>
//     setTimeout(resolve, 2000)) // delay 2 seconds
//     .then(() => this.getHeroes());
// }
}
