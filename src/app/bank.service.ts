import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";

// export interface Bank {
//   "Account No": number;
//   Date: Date;
//   "Transaction Details": string;
//   "Value Date": Date;
//   "Withdrawal AMT": number;
//   "Balance AMT": number;
// }

@Injectable()
export class Bankservice {
  constructor(private _http: HttpClient) {}

  Headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  getDetails() {
    return this._http.get("http://starlord.hackerearth.com/bankAccount", {
      headers: this.Headers
    });
  }
}
