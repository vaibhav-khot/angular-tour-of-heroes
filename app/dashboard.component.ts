import { Component , OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'


var module :{id :string}

@Component({
moduleId: module.id,
selector :'my-dashboard',
templateUrl:'./template/dashboard.component.html'

  // moduleId: module.id,
  // selector: 'my-dashboard',
  // templateUrl: 'dashboard.component.html'
})



export class DashboardComponent implements OnInit{
heroes :Hero [] =[]
constructor (private heroService : HeroService ){

}
ngOnInit() {
  console.log(this);
this.heroService.getHeroes().then(heroes=>{
  console.log(heroes);
  this.heroes=heroes;
});



}

}
