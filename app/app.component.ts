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
  templateUrl: './app/template/herodetails.html'
})


export class AppComponent {
  title = 'Tour of Heroes';
  heros = HEROS;
}
