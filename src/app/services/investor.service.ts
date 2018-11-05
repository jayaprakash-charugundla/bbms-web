import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const bbmsUrl = 'http://192.168.1.6:3000/api';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private http: HttpClient) { }

  getInvestors() {
    return this.http.get(bbmsUrl + '/com.bbms.ledger.participant.Investor', httpOptions);
  }

  createInvestor(investor) {
    let body = JSON.stringify(investor);
    return this.http.post(bbmsUrl + '/com.bbms.ledger.participant.Investor', body, httpOptions);
  }
}
