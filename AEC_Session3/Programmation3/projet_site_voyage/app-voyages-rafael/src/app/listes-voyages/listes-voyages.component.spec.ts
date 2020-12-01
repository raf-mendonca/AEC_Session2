import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesVoyagesComponent } from './listes-voyages.component';

describe('ListesVoyagesComponent', () => {
  let component: ListesVoyagesComponent;
  let fixture: ComponentFixture<ListesVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesVoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
