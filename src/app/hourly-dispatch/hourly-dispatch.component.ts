import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-hourly-dispatch',
  standalone: true,
  imports: [],
  templateUrl: './hourly-dispatch.component.html',
  styleUrl: './hourly-dispatch.component.css'
})
export class HourlyDispatchComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
    createChart(){

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['time',],
	       datasets: [{
    label: 'My First Dataset',
    data: [240, 432, 134,12,54,546,51,12,89,54,32,89,54,32,65,54,69,78,23,46,78,56,45,12],
    backgroundColor: [
      '#FDC6C6',
      '#FD6363',
      '#FDD7C6'
    ],
    
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
