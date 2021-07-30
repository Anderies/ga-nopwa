import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPredictionComponent } from './result-prediction.component';

describe('ResultPredictionComponent', () => {
  let component: ResultPredictionComponent;
  let fixture: ComponentFixture<ResultPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
