import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPredictionComponent } from './search-prediction.component';

describe('SearchPredictionComponent', () => {
  let component: SearchPredictionComponent;
  let fixture: ComponentFixture<SearchPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
