import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rows = [
    {id: 123, name: 'foo', qux: 'lorem ipsum dolor'},
    {id: 456, name: 'bar', qux: 'lorem ipsum dolor'},
    {id: 789, name: 'baz', qux: 'lorem ipsum dolor'},
  ];
  selectedRowsIds = [];

  updateSelectedRows(rowsIds: string[]) {
    this.selectedRowsIds = rowsIds;
  }
}
