import { TestBed } from '@angular/core/testing';

import { ResizerService } from './resizer.service';

describe('ResizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResizerService = TestBed.get(ResizerService);
    expect(service).toBeTruthy();
  });
});
