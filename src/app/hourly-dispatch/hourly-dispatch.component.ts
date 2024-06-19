import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { Slider, SliderModule } from 'primeng/slider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-hourly-dispatch',
  standalone: true,
  imports: [ NgApexchartsModule, CalendarModule,InputSwitchModule,SliderModule,
    FormsModule ,MatCard, MatCardModule, MatButtonModule],
  templateUrl: "./hourly-dispatch.component.html",
  styleUrls: ["./hourly-dispatch.component.css"]
})
export class HourlyDispatchComponent {
  date: Date | undefined;
  checked: boolean = false;
  value!: number;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Asset In",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148,100,52,89,10, 41, 35, 51, 49, 62, 69, 91, 148,100,52,89],
          color:'#ff7b7b',
        }
      ],
      chart: {
        height: 290,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width:2,
      },
      title: {
        text: "Assets by Month",
        align: "left",

      },

      grid: {
        row: {
          colors: ["#ffbaba", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.1
        }
      },
      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",

        ]
      }
    };
  }
}
