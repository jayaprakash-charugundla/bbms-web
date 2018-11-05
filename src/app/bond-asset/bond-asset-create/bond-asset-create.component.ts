import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BondAssetService} from '../bond-asset.service';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {BondAsset} from '../entities/bond-asset';
import {Bond} from '../entities/bond';

@Component({
  selector: 'app-bond-asset-create',
  templateUrl: './bond-asset-create.component.html',
  styleUrls: ['./bond-asset-create.component.css']
})
export class BondAssetCreateComponent implements OnInit {

  bondForm: FormGroup;
  validMessage = '';

  constructor(private bondAssetService: BondAssetService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.bondForm = new FormGroup({
      ISINCode: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      couponType: new FormControl('', Validators.required),
      maturityDate: new FormControl('', Validators.required),
      maturityValue: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  createBond() {
    if (this.bondForm.valid) {
      this.validMessage = 'Bond has been created';
      let bondAsset: BondAsset = new BondAsset();
      bondAsset.ISINCode = this.bondForm.value.ISINCode;
      bondAsset.bond = new Bond();
      bondAsset.bond.price = this.bondForm.value.price;
      bondAsset.bond.couponType = this.bondForm.value.couponType;
      bondAsset.bond.dateOfMaturity = this.bondForm.value.maturityDate;
      bondAsset.bond.valueOfMaturity = this.bondForm.value.maturityValue;
      bondAsset.bond.description = this.bondForm.value.description;
      this.bondAssetService.createBondAsset(bondAsset).subscribe(
        data => {
          this.bondForm.reset();
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
