import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../data/mock-heroes';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';





@Injectable(

)










export class HeroService {

  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }






//   // ECMA Script 6 Way
//   getHeroes(): Promise<Hero[]> {
//     return Promise.resolve(HEROES);
//   }
//   getHero(id: number): Promise<Hero> {
//   return this.getHeroes()
//              .then(heroes => heroes.find(hero => hero.id === id));
// }
// //   getHeroesSlowly(): Promise<Hero[]> {
// //   return new Promise<Hero[]>(resolve =>
// //     setTimeout(resolve, 2000)) // delay 2 seconds
// //     .then(() => this.getHeroes());
// // }
}
