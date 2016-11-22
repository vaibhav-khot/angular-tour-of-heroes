import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

var module :{id :string}

@Component({
moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl : '../../template/herodetails3.html',
})


export class HeroDetailComponent {
  @Input() hero1: Hero;
}
