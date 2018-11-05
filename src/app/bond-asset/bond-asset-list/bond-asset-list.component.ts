import {Component, OnInit} from '@angular/core';
import {BondAssetService} from '../bond-asset.service';

@Component({
  selector: 'app-bond-asset-list',
  templateUrl: './bond-asset-list.component.html',
  styleUrls: ['./bond-asset-list.component.css']
})
export class BondAssetListComponent implements OnInit {

  public bondAssets;

  constructor(private bondAssetService: BondAssetService) {
  }

  ngOnInit() {
    this.getBondAssets();
  }

  getBondAssets() {
    this.bondAssetService.getBondAssets().subscribe(
      data => this.bondAssets = data,
      error => console.log(error),
      () => console.log('Bond Assets Loaded')
    );
  }
}
