import { IssuerModule } from './issuer.module';

describe('IssuerModule', () => {
  let issuerModule: IssuerModule;

  beforeEach(() => {
    issuerModule = new IssuerModule();
  });

  it('should create an instance', () => {
    expect(issuerModule).toBeTruthy();
  });
});
