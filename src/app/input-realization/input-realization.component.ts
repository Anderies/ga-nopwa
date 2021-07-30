import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-input-realization',
  templateUrl: './input-realization.component.html',
  styleUrls: ['./input-realization.component.scss']
})
export class InputRealizationComponent implements OnInit {


  harvest_result_qty: any;
  harvest_result_price: any;
  pesticide_used: any;
  fertizilier_used: any;
  labor_worked: any;
  date: any;


  type = 1;
  data_predict: any = null;
  b: any;
  prediction_id: any;

  constructor(private router: Router, private predictService: DataPredictService) { }

  ngOnInit(): void {
    this.date = new Date();
    this.b = this.getLocalStorage()
    console.log("called", this.b)

    this.checkType()

  }

  checkType() {
    console.log("state", history.state.prediction)
    // 1 - Card Item
    // 2 - Select Prediction
    if (history.state.prediction !== null && history.state.prediction !== undefined) {
      this.predictService.getDetailPrediction(history.state.prediction).subscribe((res: any) => {
        this.data_predict = res.data
      })
      this.prediction_id = history.state.prediction
      this.type = 1;
    } else if (history.state.prediction == undefined) {
      this.type = 2;
      console.log("check elif")
    } else {
      this.type = 2;
      console.log("check else")
    }
  }

  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
  }

  back() {
    this.router.navigate(['history-dashboard'])
  }

  gotoListPredict() {
    this.router.navigate(['search-prediction'])
  }

  formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [day, month, year].join('-');
  }

  submit() {
    let formattedDate = this.formatDate(this.date)
    // this.router.navigate([`/history/${data}`])
    this.predictService.createHistory(this.b['user_id'], this.prediction_id, this.harvest_result_qty,
      this.harvest_result_price, this.pesticide_used, this.fertizilier_used, this.labor_worked, formattedDate).subscribe((res: any) => {
        console.log("res", res.data.history.history_id)
        this.router.navigate([`history/${res.data.history.history_id}`])
      })
  }

  navigatetoSearchPrediction() {
    this.router.navigate(['search-prediction'])
  }




}
