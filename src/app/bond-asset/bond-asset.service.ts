import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  const bbmsUrl = environment.baseUrl;

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

  getBondAsset(id: string) {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.bond.BondAsset/' + id, httpOptions);
  }

}
