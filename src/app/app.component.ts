import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rows = [
    {id: 123, name: 'foo'},
    {id: 456, name: 'bar'},
    {id: 789, name: 'baz'},
  ];
  selectedRowsIds = [];

  updateSelectedRows(rowsIds: string[]) {
    this.selectedRowsIds = rowsIds;
  }
}
