import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})

export class PredictionComponent implements OnInit {


  crops: any[] = [
    { value: '1', viewValue: 'Padi' },
    { value: '2', viewValue: 'Jagung' },
    { value: '3', viewValue: 'Kangkung' }
  ];

  date: any;
  farm_meter: any;
  corps_form: any;
  parentMessage = true;

  local_data: any;
  latGlob: any;
  lonGlob: any;
  constructor(private route: Router, private predictService: DataPredictService) { }

  ngOnInit(): void {
    this.getLocation()
    this.local_data = this.getLocalStorage()
  }

  back() {
    this.route.navigate(['/prediction-dashboard'])
  }

  getLocation() {
    this.predictService.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      if (pos.lng == null && pos.lat == null) {
        pos.lng = 106.7860784
        pos.lat = -6.200212400000001
        console.log("can't get location")
      } else {
        this.latGlob = pos.lat
        this.lonGlob = pos.lng
      }
    });
  }

  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
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

  showPredict() {
    // alert("terpencet")
    let formattedDate = this.formatDate(this.date)
    console.log(this.local_data['user_id'], formattedDate, this.farm_meter, this.corps_form)
    this.predictService.createPrediction(this.local_data['user_id'], formattedDate, this.farm_meter, this.corps_form, this.latGlob, this.lonGlob).subscribe((res: any) => {
      console.log("res", res);
      if (res.message == "Success") {
        this.route.navigate(['/result-prediction'], { state: { pred: res.data['prediction'], rec: res.data['recommendation'], weather: res.data['weather'] } })
      } else {
        alert("there is something wrong")
      }
    })
  }

  onCountryChanged(value: any) {
    console.log(value)
    this.corps_form = value
  }

}
