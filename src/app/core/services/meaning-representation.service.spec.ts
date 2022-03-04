import { TestBed } from '@angular/core/testing';

import { MeaningRepresentationService } from './meaning-representation.service';

describe('MeaningRepresentationService', () => {
  let service: MeaningRepresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeaningRepresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
