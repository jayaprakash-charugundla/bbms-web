import { TestBed } from '@angular/core/testing';

import { BondAssetService } from './bond-asset.service';

describe('BondAssetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BondAssetService = TestBed.get(BondAssetService);
    expect(service).toBeTruthy();
  });
});
