import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerCreateComponent } from './issuer-create.component';

describe('IssuerCreateComponent', () => {
  let component: IssuerCreateComponent;
  let fixture: ComponentFixture<IssuerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
