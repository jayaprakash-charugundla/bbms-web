import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondAssetViewComponent } from './bond-asset-view.component';

describe('BondAssetViewComponent', () => {
  let component: BondAssetViewComponent;
  let fixture: ComponentFixture<BondAssetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondAssetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondAssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
