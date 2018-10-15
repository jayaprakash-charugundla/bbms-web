import {AllocationRegulation} from './allocation-regulation';

export class OrderBook {
  $class = 'com.bbms.ledger.orderbook.OrderBook';
  orderBookId: string;
  orderBookNumber: string;
  allocationRegulation: AllocationRegulation;
  closingDate;
  description: string;
}
