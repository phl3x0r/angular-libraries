import { TestBed, inject } from '@angular/core/testing';

import { ActivityMonitorService } from './activity-monitor.service';

describe('ActivityMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityMonitorService]
    });
  });

  it('should be created', inject([ActivityMonitorService], (service: ActivityMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
