import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.css'
})
export class RecentTransactionsComponent {

}
