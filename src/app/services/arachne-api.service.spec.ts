import { TestBed, inject } from '@angular/core/testing';

import { ArachneApiService } from './arachne-api.service';

describe('ArachneApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArachneApiService]
    });
  });

  it('should be created', inject([ArachneApiService], (service: ArachneApiService) => {
    expect(service).toBeTruthy();
  }));
});
