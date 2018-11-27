import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorViewComponent } from './investor-view.component';

describe('InvestorViewComponent', () => {
  let component: InvestorViewComponent;
  let fixture: ComponentFixture<InvestorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
