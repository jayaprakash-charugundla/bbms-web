import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderBookViewComponent} from './order-book-view/order-book-view.component';
import {OrderBookCreateComponent} from './order-book-create/order-book-create.component';
import {OrderBookListComponent} from './order-book-list/order-book-list.component';

const routes: Routes = [
  {
    path: 'orderbook/:id',
    component: OrderBookViewComponent
  },
  {
    path: 'create-orderbook',
    component: OrderBookCreateComponent
  },
  {
    path: 'orderbooks',
    component: OrderBookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrderBookRoutingModule {
}
