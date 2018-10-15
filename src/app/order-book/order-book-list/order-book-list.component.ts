import { Component, OnInit } from '@angular/core';
import {OrderBookService} from '../order-book.service';

@Component({
  selector: 'app-order-book-list',
  templateUrl: './order-book-list.component.html',
  styleUrls: ['./order-book-list.component.css']
})
export class OrderBookListComponent implements OnInit {

  public orderBooks;

  constructor(private orderBookService: OrderBookService) {
  }

  ngOnInit() {
    this.getOrderBooks();
  }

  getOrderBooks() {
    this.orderBookService.getOrderBooks().subscribe(
      data => this.orderBooks = data,
      err => console.log(err),
      () => console.log('Order Books Loaded'));
  }
}
