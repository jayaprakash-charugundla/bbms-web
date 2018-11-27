import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCreateComponent } from './investor-create.component';

describe('InvestorCreateComponent', () => {
  let component: InvestorCreateComponent;
  let fixture: ComponentFixture<InvestorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
