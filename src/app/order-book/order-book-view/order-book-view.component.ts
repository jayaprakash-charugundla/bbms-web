import {Component, OnInit} from '@angular/core';
import {OrderBookService} from '../order-book.service';
import {ActivatedRoute} from '@angular/router';
import {OrderBook} from '../entities/order-book';
import {OrderBookEntry} from '../entities/order-book-entry';

@Component({
  selector: 'app-order-book-view',
  templateUrl: './order-book-view.component.html',
  styleUrls: ['./order-book-view.component.css']
})
export class OrderBookViewComponent implements OnInit {

  public orderBook: OrderBook;
  public orderBookEntries: OrderBookEntry[];

  constructor(private orderBookService: OrderBookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getOrderBook(this.route.snapshot.params.id);
    if (this.orderBook) {
      this.getOrderBookEntries(this.orderBook.orderBookId);
    }
  }

  getOrderBook(id: string) {
    this.orderBookService.getOrderBook(id).subscribe(
      data => this.orderBook = data as OrderBook,
      err => console.error(err),
      () => console.log('Order Book Loaded'));
  }

  getOrderBookEntries(id: string) {
    this.orderBookService.getOrderBookEntries({'orderBook': 'resource:' + this.orderBook.$class + '#' + id }).subscribe(
      data => this.orderBookEntries = data as OrderBookEntry[],
      err => console.error(err),
      () => console.log('Order Book Entries Loaded')
    );
  }
}
