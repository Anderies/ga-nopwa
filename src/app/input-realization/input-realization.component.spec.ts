import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRealizationComponent } from './input-realization.component';

describe('InputRealizationComponent', () => {
  let component: InputRealizationComponent;
  let fixture: ComponentFixture<InputRealizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRealizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
