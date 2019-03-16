import { TestBed } from '@angular/core/testing';

import { LandingpageguardService } from './landingpageguard.service';

describe('LandingpageguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingpageguardService = TestBed.get(LandingpageguardService);
    expect(service).toBeTruthy();
  });
});
