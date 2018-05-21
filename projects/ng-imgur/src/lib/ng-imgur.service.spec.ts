import { TestBed, inject } from '@angular/core/testing';

import { NgImgurService } from './ng-imgur.service';

describe('NgImgurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgImgurService]
    });
  });

  it('should be created', inject([NgImgurService], (service: NgImgurService) => {
    expect(service).toBeTruthy();
  }));
});
