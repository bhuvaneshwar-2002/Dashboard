import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.81, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.01, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.01, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 16.00, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 19.00, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'},
];


@Component({
  selector: 'app-asset-table',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortModule,MatPaginator,MatSort,MatFormField],
  templateUrl: './asset-table.component.html',
  styleUrl: './asset-table.component.css'
})
export class AssetTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
