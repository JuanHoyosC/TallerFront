import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { VillainCardComponent } from './components/villain-card/villain-card.component';
import { VillainComponent } from './components/villain/villain.component';
import { VillainDetailsComponent } from './components/villain-details/villain-details.component'

const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villain', component: VillainComponent },
    { path: 'detalles/:id', component:  HeroDetailsComponent },
    { path: 'detallesVillano/:id', component:  VillainDetailsComponent },
    { path: 'search/:busqueda', component:  HeroSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
