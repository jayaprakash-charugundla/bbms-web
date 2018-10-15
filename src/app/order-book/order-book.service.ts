import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const bbmsUrl = 'http://192.168.1.7:3000/api';

@Injectable({
  providedIn: 'root'
})
export class OrderBookService {

  constructor(private http: HttpClient) {
  }

  getOrderBooks() {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.orderbook.OrderBook', httpOptions);
  }

  getOrderBook(id: string) {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.orderbook.OrderBook/' + id, httpOptions);
  }

  createOrderBook(orderBook) {
    let body = JSON.stringify(orderBook);
    return this.http.post(bbmsUrl + '/com.bbms.ledger.orderbook.OrderBook', body, httpOptions);
  }

  getOrderBookEntries(orderBook) {
    let filter = JSON.stringify(orderBook);
    return this.http.get(bbmsUrl + '/com.bbms.ledger.orderbook.OrderBookEntry?filter=' + filter, httpOptions);
  }
}
