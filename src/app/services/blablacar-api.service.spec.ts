import { TestBed } from '@angular/core/testing';

import { BlablacarApiService } from './blablacar-api.service';

describe('BlablacarApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlablacarApiService = TestBed.get(BlablacarApiService);
    expect(service).toBeTruthy();
  });
});
