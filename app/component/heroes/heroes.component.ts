import { Component,OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute , Params , Router } from '@angular/router';
import { Location } from '@angular/common'; // class Location

var module :{id :string}

@Component({
moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../../template/herodetails1.html',
  styleUrls:['../../template/styles/style.css'],
  providers : [HeroService]

})
export class HeroesComponent implements OnInit{

  title = 'Tour of Heroes';
  heroes :Hero[];
  selectedHero:Hero;
  constructor(private heroService : HeroService,
              private router : Router){}

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
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}


}
