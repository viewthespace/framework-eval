import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vts-cell',
  templateUrl: './vts-cell.component.html',
  styleUrls: ['./vts-cell.component.css']
})
export class VtsCellComponent implements OnInit {
  @Input() ngModel: String

  ngOnInit() {}
}
