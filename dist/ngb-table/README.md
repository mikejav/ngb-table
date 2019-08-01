# NgbTable

Bootstrap table for Angular

## Install

1. Install ngb-table
   ```shell
   npm install --save ngb-table
   ```


2. If you haven't installed bootstrap yet, run this command:
  ```shell
  npm install --save bootstrap
  ```
  then add Twitter Bootstrap styles to your global `style.scss` file:
  ```scss
  @import '~bootstrap/dist/css/bootstrap.min.css';
  ```

Now you are ready to use the ngbTable.


## Basic Usage
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
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
+  data = [
+    { id: 123, name: 'Hot chocolate', price: 1.99, availability: 'Available' },
+    { id: 456, name: 'Slivovitz', price: 25, availability: 'Available' },
+    { id: 789, name: 'Hot chocolate festival ticket', price: 120, availability: 'Sold Out' },
+  ];
}
```

```diff
// app.component.html
+ <ngb-table [rows]="data">
+
+   <ng-template ngbTableHead>
+     <th>Name</th>
+     <th>Price</th>
+     <th>Availability</th>
+   </ng-template>
+  
+   <ng-template ngbTableBodyRow let-row>
+     <td>{{ row.name }}</td>
+     <td>USD {{ row.price }}</td>
+     <td>{{ row.availability }}</td>
+   </ng-template>
+
+ </ngb-table>
```
<!-- TODO: screenshot -->
Maybe the above example is not so advanced but it is very simple and self-explanatory.
The only thing that needs clarification is that the `ngbTableBodyRow` template takes the context for each row of the table in the implicit `row` variable.

Now let's add more stuff.

## Templates

### Header
```diff
<ngb-table [rows]="data">

+ <ng-template ngbTableHeader>
+   Product quantity: {{ data.length }}
+ </ng-template>

  <ng-template ngbTableHead>
    <th>Name</th>
    <th>Price</th>
    <th>Availability</th>
  </ng-template>

  <ng-template ngbTableBodyRow let-row>
    <td>{{ row.name }}</td>
    <td>USD {{ row.price }}</td>
    <td>{{ row.availability }}</td>
  </ng-template>

</ngb-table>
```

### Footer

```diff
<ngb-table [rows]="data">

  <ng-template ngbTableHeader>
    Product quantity: {{ data.length }}
  </ng-template>

  <ng-template ngbTableHead>
    <th>Name</th>
    <th>Price</th>
    <th>Availability</th>
  </ng-template>

  <ng-template ngbTableBodyRow let-row>
    <td>{{ row.name }}</td>
    <td>USD {{ row.price }}</td>
    <td>{{ row.availability }}</td>
  </ng-template>

+ <ng-template ngbTableFooter>
+   For more information, please contact us directry...
+ </ng-template>

</ngb-table>
```

### Row footer
```diff
<ngb-table [rows]="data">

  <ng-template ngbTableHeader>
    Product quantity: {{ data.length }}
  </ng-template>

  <ng-template ngbTableHead>
    <th>Name</th>
    <th>Price</th>
    <th>Availability</th>
  </ng-template>

  <ng-template ngbTableBodyRow let-row>
    <td>{{ row.name }}</td>
    <td>USD {{ row.price }}</td>
    <td>{{ row.availability }}</td>
  </ng-template>

+ <ng-template ngbTableFooterRow>
+   <td class="text-right">Total:</td>
+   <td colspan="2">USD 146.99</td> <!-- total is not computed dinamically for example's simplicity -->
+ </ng-template>

  <ng-template ngbTableFooter>
    For more information, please contact us directry...
  </ng-template>

</ngb-table>
```

You can create multiple footer rows:
```diff
<ngb-table [rows]="data">

  <ng-template ngbTableHeader>
    Product quantity: {{ data.length }}
  </ng-template>

  <ng-template ngbTableHead>
    <th>Name</th>
    <th>Price</th>
    <th>Availability</th>
  </ng-template>

  <ng-template ngbTableBodyRow let-row>
    <td>{{ row.name }}</td>
    <td>USD {{ row.price }}</td>
    <td>{{ row.availability }}</td>
  </ng-template>

  <ng-template ngbTableFooterRow>
    <td class="text-right">Total:</td>
    <td colspan="2">USD 146.99</td>
  </ng-template>

+ <ng-template ngbTableFooterRow>
+   <td class="text-right">Available products total:</td>
+   <td colspan="2">USD 26.99</td> <!-- total is not computed dinamically for example's simplicity -->
+ </ng-template>

  <ng-template ngbTableFooter>
    For more information, please contact us directry...
  </ng-template>

</ngb-table>
```

### Selected rows' action header
```diff
<ngb-table [rows]="data">

  <ng-template ngbTableHeader>
    Product quantity: {{ data.length }}
  </ng-template>

+ <ng-template ngbTableSelectActionsHeader>
+   Selected products count: {{ selectedRowsIds.length }}
+ </ng-template>

  <ng-template ngbTableHead>
    <th>Name</th>
    <th>Price</th>
    <th>Availability</th>
  </ng-template>

  <ng-template ngbTableBodyRow let-row>
    <td>{{ row.name }}</td>
    <td>USD {{ row.price }}</td>
    <td>{{ row.availability }}</td>
  </ng-template>

  <ng-template ngbTableFooterRow>
    <td class="text-right">Total:</td>
    <td colspan="2">USD 146.99</td>
  </ng-template>

  <ng-template ngbTableFooterRow>
    <td class="text-right">Available products total:</td>
    <td colspan="2">USD 26.99</td>
  </ng-template>

  <ng-template ngbTableFooter>
    For more information, please contact us directry...
  </ng-template>

</ngb-table>
```
see [row selection]
<!-- TODO: link to row selection section -->

## Row selection
For ability to select rows we need three things:
- enable `ngb-table` row selection
- array with selected rows IDs
- method for updating selected rows IDs array

```diff
// app.component.ts
...
export class AppComponent {
  data = [
    { id: 123, name: 'Hot chocolate', price: 1.99, availability: 'Available' },
    { id: 456, name: 'Slivovitz', price: 25, availability: 'Available' },
    { id: 789, name: 'Hot chocolate festival ticket', price: 120, availability: 'Sold Out' },
  ];
+ selectedRowsIds = [];
+
+ updateSelectedRows(rowsIds: string[]) {
+   this.selectedRowsIds = rowsIds;
+ }
}
...
```

```diff
 // app.component.html
 <ngb-table
   [rows]="data"
+  [selectable]="true"
+  [selectedRowsIds]="selectedRowsIds"
+  (selectedRowsIdsChange)="updateSelectedRows($event)"
 >
 ...
```

By default ngb-table row id property name is implicitly just `id`.
If your data structure has different id filed name, specify it as `ngb-table`'s `rowIdColumnName` input property, e.g:
```diff
<ngb-table
  [rows]="rows"
+ [rowIdColumnName]="'productId'"
...
```
If `ngbTableSelectActionsHeader` template is provided then when you select something, the `ngbTableHeader` will be replaced with `ngbTableSelectActionsHeader`
