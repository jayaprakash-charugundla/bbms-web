import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BondAssetListComponent} from './bond-asset-list/bond-asset-list.component';
import {BondAssetCreateComponent} from './bond-asset-create/bond-asset-create.component';
import {BondAssetViewComponent} from './bond-asset-view/bond-asset-view.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BondAssetRoutingModule} from './bond-asset-routing.module';
import {BondAssetService} from './bond-asset.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BondAssetRoutingModule
  ],
  declarations: [BondAssetListComponent, BondAssetCreateComponent, BondAssetViewComponent],
  providers: [
    BondAssetService
  ]
})
export class BondAssetModule {
}
