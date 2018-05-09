import { TestBed, inject } from '@angular/core/testing';

import { InactivityTimerService } from './inactivity-timer.service';

describe('NgInactivityTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InactivityTimerService]
    });
  });

  it(
    'should be created',
    inject([InactivityTimerService], (service: InactivityTimerService) => {
      expect(service).toBeTruthy();
    })
  );
});
