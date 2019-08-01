# NgbTable

Bootstrap table for Angular

## Install

1. Install ngb-table
   ```shell
   npm install --save ngb-table
   ```


2. If you haven't installed bootstrap yet, run this command:
  ```
  npm install --save bootstrap
  ```
  then add Twitter Bootstrap styles to your global `style.scss` file:
  ```scss
  @import '~bootstrap/dist/css/bootstrap.min.css';
  ```

Now you are ready to use the ngbTable.


## Usage
I will follow you through the default generated Angular app.

Firstly add `NgbTableModule` to your module:
```diff
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
+ import { NgbTableModule } from 'ngb-table';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
+   NgbTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Then you can use ngb-table in your components

```diff
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
+  data = [
+    {id: 123, name: 'foo'},
+    {id: 456, name: 'bar'},
+    {id: 789, name: 'baz'},
+  ];
+  selectedRowsIds = [];
+
+  updateSelectedRows(rowsIds: string[]) {
+    this.selectedRowsIds = rowsIds;
+  }
}

```