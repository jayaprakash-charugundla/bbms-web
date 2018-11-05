import { BondAssetModule } from './bond-asset.module';

describe('BondAssetModule', () => {
  let bondAssetModule: BondAssetModule;

  beforeEach(() => {
    bondAssetModule = new BondAssetModule();
  });

  it('should create an instance', () => {
    expect(bondAssetModule).toBeTruthy();
  });
});
