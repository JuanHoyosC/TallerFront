import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
  @Input() villains:any= [];
  @Input() index :number;

  @Output() villainSelected: EventEmitter<number>;
  constructor() { 
    this.villainSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verVillano(){
    this.villainSelected.emit(this.index);
  }

}
