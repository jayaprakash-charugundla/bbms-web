import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondAssetCreateComponent } from './bond-asset-create.component';

describe('BondAssetCreateComponent', () => {
  let component: BondAssetCreateComponent;
  let fixture: ComponentFixture<BondAssetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondAssetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondAssetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
