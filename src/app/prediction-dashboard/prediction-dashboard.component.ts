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
  term:any;
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

  getPredictionList() {
    this.predictService.getPredictionList(this.local_data['user_id']).subscribe((res: any) => {
      if (res.message == "Success") {
        console.log("Res", res.data)
        this.data_predict = res.data
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
