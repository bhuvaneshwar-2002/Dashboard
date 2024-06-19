import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
};

@Component({
  selector: 'app-hourly-dispatch',
  standalone: true,
  imports: [NgApexchartsModule, MatCard, MatCardModule, MatButtonModule],
  templateUrl: './hourly-dispatch.component.html',
  styleUrls: ['./hourly-dispatch.component.css']
})
export class HourlyDispatchComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Asset In",
          data: [31, 40, 28, 51, 42, 109, 100, 45, 78, 56, 12, 45, 46]
        },
        {
          name: "Asset OUT",
          data: [11, 32, 45, 32, 34, 52, 41, 97, 46, 13, 89, 56, 28, 89]
        }
      ],
      chart: {
        height: 300,
        width: 600,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ['#FF5733', '#33FF57'] // Change the curve colors here
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#FFFFFF",
              opacity: 0.7
            },
            {
              offset: 100,
              color: "#FFFFFF",
              opacity: 0.9
            }
          ]
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T07:00:00.000Z",
          "2018-09-19T08:30:00.000Z",
          "2018-09-19T09:30:00.000Z",
          "2018-09-19T10:30:00.000Z",
          "2018-09-19T11:30:00.000Z",
          "2018-09-19T12:30:00.000Z",
          "2018-09-19T13:30:00.000Z",
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
