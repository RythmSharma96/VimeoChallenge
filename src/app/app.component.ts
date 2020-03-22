import { Component, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource, MatPaginator } from "@angular/material";
import { Bankservice } from "./bank.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  DisplayColumns = [
    "Account No",
    "Date",
    "Transaction Details",
    "Value Date",
    "Withdrawal AMT",
    "Balance AMT"
  ];

  data = require("./data");

  constructor(private _bankService: Bankservice) {}

  ngOnInit() {
    //Not able to fetch from API(CORS related issue)
    // this._bankService.getDetails().subscribe(
    //   (data: any) => {
    //     if (!data) return;
    //     this.dataSource.data = data;
    //   },
    //   error => console.log(error)
    // );
    // console.log(this.data);
    this.dataSource.data = this.data.data;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
