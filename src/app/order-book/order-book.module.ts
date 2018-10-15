import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {OrderBookCreateComponent} from './order-book-create/order-book-create.component';
import {OrderBookViewComponent} from './order-book-view/order-book-view.component';
import {OrderBookListComponent} from './order-book-list/order-book-list.component';
import {OrderBookService} from './order-book.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderBookRoutingModule} from './order-book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrderBookRoutingModule
  ],
  declarations: [
    OrderBookCreateComponent,
    OrderBookViewComponent,
    OrderBookListComponent
  ],
  providers: [
    DatePipe,
    OrderBookService
  ]
})
export class OrderBookModule { }
