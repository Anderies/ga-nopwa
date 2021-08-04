import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';
@Component({
  selector: 'app-search-prediction',
  templateUrl: './search-prediction.component.html',
  styleUrls: ['./search-prediction.component.scss']
})
export class SearchPredictionComponent implements OnInit {

  local_data: any;
  data_predict: any;
  term: any;
  constructor(private location: Location, private router: Router, private predictService: DataPredictService) { }

  ngOnInit(): void {
    this.local_data = this.getLocalStorage()
    this.getPredictionList()
  }

  back() {
    this.location.back();
  }

  search() {
    alert('boom')
  }

  gotoInputRealization(pd_id: any) {
    this.router.navigate(['input-realization'], { state: { prediction: pd_id } })
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


}
