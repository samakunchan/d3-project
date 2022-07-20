import { TestBed } from '@angular/core/testing';

import { D3jstestService } from './d3jstest.service';

describe('D3jstestService', () => {
  let service: D3jstestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3jstestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
