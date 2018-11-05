import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondAssetListComponent } from './bond-asset-list.component';

describe('BondAssetListComponent', () => {
  let component: BondAssetListComponent;
  let fixture: ComponentFixture<BondAssetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondAssetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
