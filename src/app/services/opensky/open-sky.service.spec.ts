import { TestBed } from '@angular/core/testing';

import { OpenSkyService } from './open-sky.service';

describe('OpenSkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenSkyService = TestBed.get(OpenSkyService);
    expect(service).toBeTruthy();
  });
});
