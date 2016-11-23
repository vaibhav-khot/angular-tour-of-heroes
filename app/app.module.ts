import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { DashboardComponent } from './component/dashboard/dashboard.component'
import { HeroesComponent } from './component/heroes/heroes.component'
import { AppComponent }  from './component/app/app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { AppRoutingModule } from './module/app-routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent ,
                  HeroDetailComponent ,
                  HeroesComponent,
                  DashboardComponent
                ],
    providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
