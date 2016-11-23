import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component'
import { HeroesComponent } from './component/heroes/heroes.component'
import { AppComponent }  from './component/app/app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [ AppComponent ,
                  HeroDetailComponent ,
                  HeroesComponent,
                  DashboardComponent
                ],
    providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
