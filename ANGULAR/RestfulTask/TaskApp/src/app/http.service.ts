import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class HttpService {


  getTasks() {
    // our http response is an Observable, store it in a variable.
    const obsIndex = this._http.get('/');
    // subscribe to the Observable and provide the code we would like to do with out data from the response
    obsIndex.subscribe(data => console.log('data'));
  }

  showTask() {
    const obsShowOne = this._http.get('/show/:id');
    obsShowOne.subscribe(data => console.log('data'));
  }

  newTask() {
    const obsNewTask = this._http.get('/new/:name/:description');
    obsNewTask.subscribe(data => console.log(data));
  }

  updateTask() {
    const obsUpTask = this._http.get('/:id/update');
    obsUpTask.subscribe(data => console.log(data));
  }

  deleteTask() {
    const obsDelTask = this._http.get('/:id/delete');
    obsDelTask.subscribe(data => console.log(data));
  }

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.showTask();
    this.newTask();
    this.updateTask();
    this.deleteTask();
  }

}


