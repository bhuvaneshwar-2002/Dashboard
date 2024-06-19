import { Component, ViewChild } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { Colors } from "chart.js";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-monthly-dispatch',
  standalone: true,
  imports: [NgApexchartsModule,MatButtonModule,MatCardModule],
  templateUrl: './monthly-dispatch.component.html',
  styleUrl: './monthly-dispatch.component.css'
})
export class MonthlyDispatchComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Asset IN",
          data: [44, 55, 41, 67, 22, 43,89,99,56,21,78,56],
          color:'#FD6363'
        },
        {
          name: "Asset OUT",
          data: [13, 23, 20, 28, 13, 27,23,56,45,78,89,46],
          color:'#FDD7C6'
        }
      ],
      chart: {
        type: "bar",
        height: 290,
        width: 450,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2024",
          "02/2024",
          "03/2024",
          "04/2024",
          "05/2024",
          "06/2024",
          "07/2024",
          "08/2024",
          "09/2024",
          "10/2024",
          "11/2024",
          "12/2024",
        ]
      },
      legend: {
        position: "bottom",
        offsetX: 40,

      },
      fill: {
        opacity: 1
      }
    };
  }
}


