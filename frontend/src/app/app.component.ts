import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableConfig = {
    paginated: false,
    columns: [
      { title: 'name', width: 10 },
      { title: 'height', width: 5 },
      { title: 'age', width: 8 },
    ]
  }

  users = [
    {
      "name": "Kyle Holzinger",
      "height": 978234,
      "age": 798123
    },
    {
      "name": "Evan Goodberry",
      "height": 234789,
      "age": 918723
    },
    {
      "name": "Maurice Cruz",
      "height": 4534897,
      "age": 12873
    },
    {
      "name": "Omar Zamudio",
      "height": 34586778,
      "age": 78123
    },
    {
      "name": "Chuck Groom",
      "height": 7859834,
      "age": 23784
    }
  ]
}
