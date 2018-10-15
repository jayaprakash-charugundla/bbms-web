import {Component, OnInit} from '@angular/core';
import {OrderBookService} from '../order-book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-book-view',
  templateUrl: './order-book-view.component.html',
  styleUrls: ['./order-book-view.component.css']
})
export class OrderBookViewComponent implements OnInit {

  public orderBook = {};

  constructor(private orderBookService: OrderBookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.orderBook.allocationRegulation = {};
    this.getOrderBook(this.route.snapshot.params.id);
    if (this.orderBook) {
      this.getOrderBookEntries(this.orderBook.orderBookId);
    }
  }

  getOrderBook(id: string) {
    this.orderBookService.getOrderBook(id).subscribe(
      data => this.orderBook = data,
      err => console.error(err),
      () => console.log('Order Book Loaded'));
  }

  getOrderBookEntries(id: string) {
    var orderBookPayload = {};
    orderBookPayload.orderBook = 'resource:com.bbms.ledger.orderbook.OrderBook#' + id;
    this.orderBookService.getOrderBookEntries(orderBookPayload).subscribe(
      data => this.orderBook.entries = data,
      err => console.error(err),
      () => console.log('Order Book Entries Loaded')
    );
  }
}
