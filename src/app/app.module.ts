import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

// RUTAS

import { APP_ROUTING } from './app.routes';


// SERVICIOS

import { HeroService } from './service/hero.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { VillainCardComponent } from './components/villain-card/villain-card.component';
import { VillainComponent } from './components/villain/villain.component';
import { VillainDetailsComponent } from './components/villain-details/villain-details.component';
import { HeroeVillainCardComponent } from './components/heroe-villain-card/heroe-villain-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    HeroSearchComponent,
    HeroCardComponent,
    VillainCardComponent,
    VillainComponent,
    VillainDetailsComponent,
    HeroeVillainCardComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
