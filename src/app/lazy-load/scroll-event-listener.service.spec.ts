import { TestBed } from '@angular/core/testing';

import { ScrollEventListenerService } from './scroll-event-listener.service';

describe('ScrollEventListenerService', () => {
  let service: ScrollEventListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollEventListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
