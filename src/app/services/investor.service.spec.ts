import { TestBed } from '@angular/core/testing';

import { InverstorService } from './investor.service';

describe('InverstorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InverstorService = TestBed.get(InverstorService);
    expect(service).toBeTruthy();
  });
});
