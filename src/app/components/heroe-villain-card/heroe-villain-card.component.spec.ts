import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeVillainCardComponent } from './heroe-villain-card.component';

describe('HeroeVillainCardComponent', () => {
  let component: HeroeVillainCardComponent;
  let fixture: ComponentFixture<HeroeVillainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeVillainCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeVillainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
