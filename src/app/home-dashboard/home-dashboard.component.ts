import { Component, OnInit } from '@angular/core';
import * as data from './data';

import * as shape from 'd3-shape';
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  homeMenuSend: boolean = true;
  //  chart.js

  // curve = shape.curveCatmullRom.alpha(0.5)
  curve = shape.curveBundle.beta(1);
  // options
  dataStats: any;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  line: any;
  colorScheme = {
    domain: ['#147AD6']
  };
  view: any;

  isData = null;

  data_predict: any;
  data_local: any;

  multi = [
    {
        "name": "Prediction",
        "series": [
            {
                "name": "Jan",
                "value": 0
            },
            {
                "name": "Feb",
                "value": 0
            },
            {
                "name": "Mar",
                "value": 0
            }
        ]
    },
];
  constructor(private router: Router,
    private predictService: DataPredictService) {
    this.dataStats = this.multi;
    this.view = [innerWidth / 1.1, 220];
  }

  ngOnInit(): void {
    this.data_local = this.getLocalStorage()
    this.getChartData()
    this.getLastestData()

  }


  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
  }

  getChartData() {
    return this.predictService.getStatistic(this.data_local['user_id']).subscribe((res: any) => {
      
    })
  }

  logicBulan(harvest_date: any) {
    console.log("harvest_date", harvest_date)
  }

  getLastestData() {
    this.predictService.getLatestPrediction(this.data_local['user_id']).subscribe((res: any) => {
      if (res.message == "Success") {
        this.data_predict = res.data
        console.log("boom =>", this.data_predict)

      } else {
        this.data_predict = null;
      }
    })
  }


  gotoHisDetail(hid: any) {
    this.router.navigate([`history/${hid}`])
  }

}


