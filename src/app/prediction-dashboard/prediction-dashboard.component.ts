import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-prediction-dashboard',
  templateUrl: './prediction-dashboard.component.html',
  styleUrls: ['./prediction-dashboard.component.scss']
})
export class PredictionDashboardComponent implements OnInit {

  predictionMenuSend: boolean = true;

  data_predict: any = null;
  local_data: any;
  term: any;
  catList: any;
  constructor(private router: Router,
    private predictService: DataPredictService) { }

  ngOnInit(): void {
    // this.getServiceData()
    this.local_data = this.getLocalStorage()
    this.getPredictionList()
  }

  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
  }

  categoryChange(category: any) {
    console.log("test", category)
    if (category == '1') {
      return 'Padi'
    } else if (category == '2') {
      return 'Kangkung'
    } else if (category == '3') {
      return 'Cabai'
    } else if (category == '4') {
      return 'Jagung'
    } else {
      return 'Kedelai'
    }
  }

  getPredictionList() {
    this.predictService.getPredictionList(this.local_data['user_id']).subscribe((res: any) => {
      if (res.message == "Success") {
        this.data_predict = res.data
        this.data_predict.forEach((element: any) => {
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
      } else {
        this.data_predict = null
      }
    })

  }

  generatePredict() {
    this.router.navigate(['/prediction'])
  }

  getDetailPrediction(pd_id: any) {
    this.router.navigate([`/prediction/${pd_id}`])
  }
}
