import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPredictService } from '../services/data-predict.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  hId: any;
  data_history: any;
  constructor(private router: Router, private predictService: DataPredictService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.predictService.getHistoryList().subscribe()
    this.hId = this.route.snapshot.paramMap.get('id')
    console.log(this.hId)
    this.predictService.getHistoryDetail(this.hId).subscribe((res: any) => {

      this.data_history = res.data['history']
      console.log(this.data_history)
    })
  }

  back() {
    this.router.navigate(['/history-dashboard'])
  }
}
