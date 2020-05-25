import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-villain-card',
  templateUrl: './heroe-villain-card.component.html',
  styleUrls: ['./heroe-villain-card.component.css']
})
export class HeroeVillainCardComponent implements OnInit {
  @Input() villainHeroe:any= [];
  @Input() index :number;

  constructor() { 

  }

  ngOnInit(): void {
  }



}
