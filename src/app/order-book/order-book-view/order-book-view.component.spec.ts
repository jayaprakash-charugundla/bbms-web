import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookViewComponent } from './order-book-view.component';

describe('OrderBookViewComponent', () => {
  let component: OrderBookViewComponent;
  let fixture: ComponentFixture<OrderBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
