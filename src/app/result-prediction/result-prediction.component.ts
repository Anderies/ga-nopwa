import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { DataPredictService } from '../services/data-predict.service';
@Component({
  selector: 'app-result-prediction',
  templateUrl: './result-prediction.component.html',
  styleUrls: ['./result-prediction.component.scss']
})
export class ResultPredictionComponent implements OnInit {

  single = [{
    name: 'Germany',
    value: 60
  },
  {
    name: 'USA',
    value: 40
  }];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  isDoughnut: boolean = true;

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#147AD6', '#CBD2DE']
  };


  weather: any;

  data_recommendation: any = {
    "pesticide": 312,
    "fertilizer": 214,
    "labor": 17
  };
  data_pred: any;

  fromDetail: boolean = false;

  isLoading: boolean = true;
  constructor(private router: Router, private location: Location, private predictService: DataPredictService) { }

  ngOnInit(): void {
    this.getWeather()
    // from generate data
    this.fillPredData()


    if (this.data_pred == null) {
      this.router.navigate(['prediction-dashboard'])
    }
    this.data_recommendation = history.state.rec

    setInterval(() => { this.isLoading = false; }, 1500);
  }

  fillPredData() {
    let hisPred = history.state.pred
    this.data_pred = hisPred
  }



  getWeather() {
    this.weather = history.state.weather
    console.log(this.weather)
  }

  back() {
    this.location.back()
  }



  navigateRealization() {
    // input-realization
    this.router.navigate(['input-realization'])
  }

  onSelect() {
    console.log();
  }

}
