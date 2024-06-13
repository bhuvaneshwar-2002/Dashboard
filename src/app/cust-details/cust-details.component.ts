
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cust-details',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './cust-details.component.html',
  styleUrl: './cust-details.component.css'
})

export class PieChartComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
    createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Hyundai','RNAIPL','Daimler',],
	       datasets: [{
    label: 'My First Dataset',
    data: [240, 432, 134],
    backgroundColor: [
      '#FDC6C6',
      '#FD6363',
      '#FDD7C6'
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
  

}