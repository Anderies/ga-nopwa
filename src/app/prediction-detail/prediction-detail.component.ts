import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-prediction-detail',
  templateUrl: './prediction-detail.component.html',
  styleUrls: ['./prediction-detail.component.scss']
})
export class PredictionDetailComponent implements OnInit {

  pid: any;
  data_pred: any;
  data_recommendation: any;
  constructor(private router: Router, private predictService: DataPredictService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.predictService.getHistoryList().subscribe()
    this.pid = this.route.snapshot.paramMap.get('id')
    this.getResultPredict(this.pid)
  }

  getResultPredict(pd_id: any) {
    this.predictService.getDetailPrediction(pd_id).subscribe((res: any) => {
      console.log("res ==>", res)
      this.data_pred = res.data.prediction
      this.data_recommendation = res.data.recommendation
    })
  }

  back() {
    this.router.navigate(['prediction-dashboard'])
  }

}
