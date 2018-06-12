import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MonDataService {
  constructor(private _http: HttpClient) {
    this.getIndex();
  }

  getIndex() {
    const obsIndex = this._http.get('/');
    obsIndex.subscribe(data => console.log('logged from MonDataService'));
  }

}
