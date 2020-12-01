import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomDescriptionComponent } from './nom-description.component';

describe('NomDescriptionComponent', () => {
  let component: NomDescriptionComponent;
  let fixture: ComponentFixture<NomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
