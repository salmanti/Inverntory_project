import { TestBed } from '@angular/core/testing';

import { LogindataService } from './logindata.service';

describe('LogindataService', () => {
  let service: LogindataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
