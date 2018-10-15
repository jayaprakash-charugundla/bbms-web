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
export class IssuerService {

  constructor(private http: HttpClient) { }

  getIssuers() {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.participant.Issuer', httpOptions);
  }

  createIssuer(issuer) {
    let body = JSON.stringify(issuer);
    return this.http.post(bbmsUrl + '/com.bbms.ledger.participant.Issuer', body, httpOptions);
  }
}
