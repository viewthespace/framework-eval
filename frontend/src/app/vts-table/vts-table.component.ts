import { Component, OnInit, Input } from '@angular/core';

type TableConfig = {
  pagination: boolean
  columns: Array<ArrayConfig>
}

type ArrayConfig = {
  title: String
  width: Array<Number>
}

@Component({
  selector: 'app-vts-table',
  templateUrl: './vts-table.component.html',
  styleUrls: ['./vts-table.component.css']
})
export class VtsTableComponent implements OnInit {
  @Input() config: TableConfig

  ngOnInit() {}
}
