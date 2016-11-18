import { Component } from '@angular/core';


//Class
export class Hero {
  id: number;
  name: string;

}
//Const HERO (caps)s
const HEROS:Hero[] = [
  {id : 1 ,name : 'Sagar' },
  {id : 2 ,name : 'Aaron' },
  {id : 3 ,name : 'Shyam' },
  {id : 4 ,name : 'Bhupendra' },
  {id : 5 ,name : 'Sharad' },
  {id : 6 ,name : 'Rahul' },
  {id : 7 ,name : 'Aniket' },
  {id : 8 ,name : 'Vaibhav' }
  // {id : 1 ,name : "" },
  // {id : 1 ,name : "" },
  // {id : 1 ,name : "" },
  // {id : 1 ,name : "" },
  //
];

@Component({
  selector: 'heroes-app',
  templateUrl: './app/template/herodetails.html',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})


export class AppComponent {
  title = 'Tour of Heroes';
  heros = HEROS;
  showHero = function(hero:Hero) {
    alert("Hello from " + hero.name + " my ID is "+hero.id);
  }

}
