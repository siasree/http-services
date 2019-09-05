import { Component, OnInit } from '@angular/core';
import { InfoDataService } from '../infoDataDetails';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [InfoService]
})
export class DataComponent implements OnInit {

  public InfoDataService = [];
  constructor(private serviceInfo: InfoService) { }

  ngOnInit() {
    this.serviceInfo.infoServiceData()
      .subscribe(testdata => this.InfoDataService = testdata);
  }

}
