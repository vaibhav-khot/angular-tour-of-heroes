import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common'; // class Location

//import the switchMap operator to use route parameters Observable.
import 'rxjs/add/operator/switchMap';


import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service'
var module :{id :string}

@Component({
moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl : '../../template/herodetails3.html',
  styleUrls : []
})


export class HeroDetailComponent implements OnInit{

  constructor( private location : Location,
              private route : ActivatedRoute, //for params
              private heroService : HeroService
  ){}

  //<method>():<returntype>{}
  //returntype -- void , number
  ngOnInit():void {
  console.log(this);
    this.route.params
         .switchMap((params: Params) =>
           this.heroService.getHero(+params['id']))
           //The hero id is a number.Route parameters are always strings.
           //So we convert the route parameter value to a number with the JavaScript (+) operator.
         .subscribe(hero => this.hero = hero);
       }
       goBack():void{
         this.location.back();
       }
  @Input() hero: Hero;
  //Declares an input property that you can update via property binding
  //(example: <my-cmp [myProperty]="someExpression">).
}
