import { TestBed, inject } from '@angular/core/testing';

import { MonDataService } from './mon-data.service';

describe('MonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonDataService]
    });
  });

  it('should be created', inject([MonDataService], (service: MonDataService) => {
    expect(service).toBeTruthy();
  }));
});
