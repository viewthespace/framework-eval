import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VtsTableComponent } from './vts-table/vts-table.component';
import { VtsTableRowComponent } from './vts-table/vts-table-row/vts-table-row.component';
import { VtsCellComponent } from './vts-table/vts-cell/vts-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    VtsTableComponent,
    VtsTableRowComponent,
    VtsCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
