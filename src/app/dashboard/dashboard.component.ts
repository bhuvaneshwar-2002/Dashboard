import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PieChartComponent } from '../cust-details/cust-details.component';
import { HourlyDispatchComponent } from '../hourly-dispatch/hourly-dispatch.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, PieChartComponent, HourlyDispatchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
