
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartOptions } from 'chart.js/auto';
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


	       datasets: [{
    label: 'My First Dataset',
    data: [240, 432, 134],
    backgroundColor: [
      '#FDC6C6',
      '#FD6363',
      '#FDD7C6'
    ],
    hoverOffset: 4,
    borderRadius: 10
  }],
  labels: ['Hyundai','RNAIPL','Daimler',],
      },

      options: {aspectRatio:0.5,
        responsive: true,



        plugins: {
          legend: {
            position: 'bottom',
            align:'start',

          },
          title: {
              display: true,
              // text: 'Custom Chart Title', //Chart Title

          }
      }
      }


    });
  }


}
