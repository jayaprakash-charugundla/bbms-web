import { OrderBookModule } from './order-book.module';

describe('OrderBookModule', () => {
  let orderBookModule: OrderBookModule;

  beforeEach(() => {
    orderBookModule = new OrderBookModule();
  });

  it('should create an instance', () => {
    expect(orderBookModule).toBeTruthy();
  });
});
