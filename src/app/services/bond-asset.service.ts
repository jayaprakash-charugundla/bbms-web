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
export class BondAssetService {

  constructor(private http: HttpClient) { }

  getBondAssets() {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.bond.BondAsset', httpOptions);
  }

  createBondAsset(bondAsset) {
    let body = JSON.stringify(bondAsset);
    return this.http.post(bbmsUrl + '/com.bbms.ledger.bond.BondAsset', body, httpOptions);
  }

}
