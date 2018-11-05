import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BondAssetViewComponent} from './bond-asset-view/bond-asset-view.component';
import {BondAssetCreateComponent} from './bond-asset-create/bond-asset-create.component';
import {BondAssetListComponent} from './bond-asset-list/bond-asset-list.component';


const routes: Routes = [
  {
    path: 'bondasset/:id',
    component: BondAssetViewComponent
  },
  {
    path: 'createbondasset',
    component: BondAssetCreateComponent
  },
  {
    path: 'bondassets',
    component: BondAssetListComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BondAssetRoutingModule {
}
