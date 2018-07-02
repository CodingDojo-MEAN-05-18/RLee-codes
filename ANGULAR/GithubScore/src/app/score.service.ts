import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { of } from 'rxjs';  this wasn't needed, not sure why yet

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }

  private base: string = 'https://api.github.com/users/';

  getUser(name): Observable<object> {
    return this.http.get<object>(this.base + name)

  }

  errorHandler(error: HttpErrorResponse) {

  }

}
