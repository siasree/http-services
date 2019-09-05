import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoDataService } from 'src/app/infoDataDetails';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  private url: string = "/assets/infornationData/data.json";

  constructor(private http: HttpClient) { }
  
  infoServiceData(): Observable<InfoService[]> {
    return this.http.get<InfoService[]>(this.url);
  }
}
