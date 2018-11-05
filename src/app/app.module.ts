import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {InvestorService} from './services/investor.service';
import {IssuerService} from './services/issuer.service';
import {OrderBookModule} from './order-book/order-book.module';
import {BondAssetModule} from './bond-asset/bond-asset.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderBookModule,
    BondAssetModule
  ],
  providers: [
    InvestorService,
    IssuerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
