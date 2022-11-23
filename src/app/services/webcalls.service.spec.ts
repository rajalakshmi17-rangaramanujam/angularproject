import { TestBed } from '@angular/core/testing';

import { WebcallsService } from './webcalls.service';

describe('WebcallsService', () => {
  let service: WebcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
