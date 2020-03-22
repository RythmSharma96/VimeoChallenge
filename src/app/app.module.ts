import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Bankservice } from "./bank.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSortModule } from "@angular/material";
import { MatTableModule } from "@angular/material";
import {
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [Bankservice],
  bootstrap: [AppComponent]
})
export class AppModule {}
