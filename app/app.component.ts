import { Component } from '@angular/core';


//Class
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'heroes-app',
  templateUrl: './app/template/herodetails.html'
})

export class AppComponent {
  title = 'Tour of Heroes';
  // (set this) : (using this) { (with these properties)}
  hero : Hero = {
    id: 1,
    name: 'VK'
  };
}
