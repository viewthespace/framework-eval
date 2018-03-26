import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vts-cell',
  templateUrl: './vts-cell.component.html',
  styleUrls: ['./vts-cell.component.css']
})
export class VtsCellComponent {
  @Input() ngModel: String
}
