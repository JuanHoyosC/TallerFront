import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { VillainService } from '../../service/villain.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  villainHero: any[] = [];
  busqueda: string;
  constructor( private _heroService:HeroService,
               private _villainService:VillainService,
               private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params=>{
      this.busqueda = params['busqueda'];
      this.villainHero = this._heroService.buscarHeroe(params['busqueda']);
      if (this.villainHero.length == 0){
        this.villainHero = this._villainService.buscarVillain(params['busqueda']);
      }
    })
  }
}
