import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.retrieveTask();
   }

  retrieveTask() {
    this.http.get('http://5b38077be1f26d0014569e82.mockapi.io/task/task').subscribe((task: any[]) => { this.task.next(task); }
    );
  }

  addTask(newTask: any) {
    this.http.post('http://5b38077be1f26d0014569e82.mockapi.io/task/task', newTask).subscribe((response) => { this.retrieveTask(); }
    );
  }

// method to update the BehaviorSubject
  updateTask(newTask: any): void {
    const tempData = this.task.getValue();
    tempData.push(newTask);
    this.task.next(tempData);
  }
}
