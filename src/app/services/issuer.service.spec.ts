import { TestBed } from '@angular/core/testing';

import { IssuerService } from './issuer.service';

describe('IssuerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssuerService = TestBed.get(IssuerService);
    expect(service).toBeTruthy();
  });
});
