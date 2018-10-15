import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookCreateComponent } from './order-book-create.component';

describe('OrderBookCreateComponent', () => {
  let component: OrderBookCreateComponent;
  let fixture: ComponentFixture<OrderBookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
