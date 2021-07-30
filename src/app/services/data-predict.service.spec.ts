import { TestBed } from '@angular/core/testing';

import { DataPredictService } from './data-predict.service';

describe('DataPredictService', () => {
  let service: DataPredictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPredictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
