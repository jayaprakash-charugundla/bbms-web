import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderBookService} from '../order-book.service';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-book-create',
  templateUrl: './order-book-create.component.html',
  styleUrls: ['./order-book-create.component.css']
})
export class OrderBookCreateComponent implements OnInit {

  orderBookForm: FormGroup;
  validMessage = '';

  constructor(private orderBookService: OrderBookService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.orderBookForm = new FormGroup({
      orderBookNumber: new FormControl('', Validators.required),
      banks: new FormControl('', Validators.required),
      hedgefunds: new FormControl('', Validators.required),
      fii: new FormControl('', Validators.required),
      closingDate: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  createOrderBook() {
    if (this.orderBookForm.valid) {
      this.validMessage = 'Order Book has been created.';
      let orderBook = {};
      orderBook.$class = 'com.bbms.ledger.orderbook.OrderBook';
      orderBook.orderBookId = 'OB-124-10-15-18';
      orderBook.orderBookNumber = this.orderBookForm.value.orderBookNumber;
      orderBook.allocationRegulation = {};
      orderBook.allocationRegulation.$class = 'com.bbms.ledger.orderbook.AllocationRegulation';
      orderBook.allocationRegulation.banks = this.orderBookForm.value.banks;
      orderBook.allocationRegulation.hedgefunds = this.orderBookForm.value.hedgefunds;
      orderBook.allocationRegulation.fii = this.orderBookForm.value.fii;
      orderBook.closingDate = this.datePipe.transform(this.orderBookForm.value.closingDate, 'yyyy/MM/dd HH:mm:ss');
      console.log(orderBook);
      this.orderBookService.createOrderBook(orderBook).subscribe(
        data => {
          this.orderBookForm.reset();
          return true;
        },
        err => {
          Observable.throw(err);
        },
      );
    } else {
      this.validMessage = 'Please fill the form';
    }
  }
}
