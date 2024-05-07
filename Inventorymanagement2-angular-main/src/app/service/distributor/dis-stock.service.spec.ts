import { TestBed } from '@angular/core/testing';

import { DisStockService } from './dis-stock.service';

describe('DisStockService', () => {
  let service: DisStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
