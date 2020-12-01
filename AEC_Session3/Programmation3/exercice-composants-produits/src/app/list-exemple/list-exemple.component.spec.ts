import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExempleComponent } from './list-exemple.component';

describe('ListExempleComponent', () => {
  let component: ListExempleComponent;
  let fixture: ComponentFixture<ListExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
