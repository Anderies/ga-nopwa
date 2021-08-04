import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-history-dashboard',
  templateUrl: './history-dashboard.component.html',
  styleUrls: ['./history-dashboard.component.scss']
})
export class HistoryDashboardComponent implements OnInit {

  isDataNull = null;

  historyMenuSend: boolean = true;
  data_history: any;
  constructor(private router: Router, private predictService: DataPredictService) { }

  ngOnInit(): void {
    this.getLocalStorage()
    this.getHistory()
  }

  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
  }

  getHistory() {
    let b = this.getLocalStorage()
    this.predictService.getHistoryList(b['user_id']).subscribe((res: any) => {
      // console.log("res", res)
      this.data_history = res.data
      this.data_history.forEach((element: any) => {
        if (element.category_id == '1') {
          element.category_id = 'Padi'
        } else if (element.category_id == '2') {
          element.category_id = 'Kangkung'
        } else if (element.category_id == '3') {
          element.category_id = 'Cabai'
        } else if (element.category_id == '4') {
          element.category_id = 'Jagung'
        } else {
          element.category_id = 'Kedelai'
        }
      })
      console.log("this.data_history",this.data_history)
      
    })
  }

  addHistory(){
    this.router.navigate([`/input-realization`])
  }


  gotoDetail(data: any) {
    console.log("data from clicked", data)
    this.router.navigate([`/history/${data}`])
  }

  gotoPrediction(){
    this.router.navigate([`/prediction-dashboard`])
  }



}
