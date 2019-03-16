import { TestBed } from '@angular/core/testing';

import { DashboardactivateguardService } from './dashboardactivateguard.service';

describe('DashboardactivateguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardactivateguardService = TestBed.get(DashboardactivateguardService);
    expect(service).toBeTruthy();
  });
});
