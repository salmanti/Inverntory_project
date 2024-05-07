import { TestBed } from '@angular/core/testing';

import { DisCustomerService } from './dis-customer.service';

describe('DisCustomerService', () => {
  let service: DisCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
