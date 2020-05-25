import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Villain, VillainService} from '../../service/villain.service'
@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  villain:Villain[]=[];
  constructor(private _router: Router, private _villainService: VillainService) { }

  ngOnInit(): void {
    this.villain = this._villainService.getVillains();
  }

  verVillano(id:number){
    console.log(id)
    this._router.navigate(['/detallesVillano',id]);
  }
}
