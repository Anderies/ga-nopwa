import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPredictService {


  resCreatePred: any;

  constructor(private http: HttpClient) { }

  getWeather(total_days: any) {
    let sunny, cloudy, rain;
    console.log("TOTAL DAYS", total_days)
    // request API; 
    sunny = 100;
    cloudy = 60;
    rain = 20;
    return { sunny, cloudy, rain };
  }

  getHistoryList(uid: any) {
    return this.http.get(`https://mustseeum.com/henshuai/API/history/get_list?uid=${uid}`)
  }

  getHistoryDetail(hid: any) {
    return this.http.get(`https://mustseeum.com/henshuai/API/history/get_detail?hid=${hid}`)
  }

  getLatestPrediction(uid: any) {
    return this.http.get(`https://mustseeum.com/henshuai/API/user/get_last_harvest?uid=${uid}`)
    
  }

  getPredictionList(uid: any) {
    return this.http.get(`https://mustseeum.com/henshuai/API/prediction/get_list?uid=${uid}`)
  }

  getDetailPrediction(pid: any) {
    return this.http.get(`https://mustseeum.com/henshuai/API/prediction/get_detail?pid=${pid}`)
  }

  getStatistic(uid:any){
    return this.http.get(`https://mustseeum.com/henshuai/API/user/get_harvest_statistic?uid=${uid}`)
  }


  createPrediction(uid: any, pred_date: any, farm_area: any, cat_id: any) {

    var formData: any = new FormData();
    formData.append("user-id", uid);
    formData.append("date", pred_date);
    formData.append("farm-area", farm_area);
    formData.append("category-id", cat_id);

    this.resCreatePred = this.http.post("https://mustseeum.com/henshuai/API/prediction/create", formData)

    return this.resCreatePred;
  }

  createHistory(user_id: any,
    prediction_id: any,
    harvest_qty: any,
    harvest_price: any,
    pesticide: any, fertilizer: any, labor: any, harvest_date: any) {

    var formData: any = new FormData();
    if (prediction_id == undefined) {
      formData.append("user-id", user_id)
      formData.append("harvest-qty", harvest_qty)
      formData.append("harvest-price", harvest_price);
      formData.append("pesticide", pesticide);
      formData.append("fertilizer", fertilizer);
      formData.append("labor", labor);
      formData.append("harvest-date", harvest_date)
    } else {
      formData.append("user-id", user_id)
      formData.append("prediction-id", prediction_id)
      formData.append("harvest-qty", harvest_qty)
      formData.append("harvest-price", harvest_price);
      formData.append("pesticide", pesticide);
      formData.append("fertilizer", fertilizer);
      formData.append("labor", labor);
      formData.append("harvest-date", harvest_date)
    }

    return this.http.post('https://mustseeum.com/henshuai/API/history/create', formData)
  }



}
