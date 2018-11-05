import {Component, OnInit} from '@angular/core';
import {BondAssetService} from '../bond-asset.service';
import {BondAsset} from '../entities/bond-asset';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bond-asset-view',
  templateUrl: './bond-asset-view.component.html',
  styleUrls: ['./bond-asset-view.component.css']
})
export class BondAssetViewComponent implements OnInit {

  public bondAsset: BondAsset;

  constructor(private bondAssetService: BondAssetService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBondAsset(this.route.snapshot.params.id);
  }

  getBondAsset(id: string) {
    this.bondAssetService.getBondAsset(id).subscribe(
      data => this.bondAsset = data as BondAsset,
      error => console.log(error),
      () => console.log('Bond Asset Loaded for ' + id)
    );
  }

}
