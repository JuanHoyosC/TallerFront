import { Component, OnInit } from '@angular/core';
import { Villain, VillainService  } from '../../service/villain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villain-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.css']
})
export class VillainDetailsComponent implements OnInit {
  villain:any = [];
  imgCasa:string;
  constructor(private _activeRoute: ActivatedRoute, private _villainService:VillainService) {

    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.villain = this._villainService.getVillain(params['id']);
    })

   }

  ngOnInit(): void {
  }

}
