import { Component, OnInit } from '@angular/core';
import { InvokeMethodExpr } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [
    { title: 'first task' },
    { title: 'second task' }
  ]

  invoke(event) {
    console.log("Invoked", event);
  }

  constructor() { }

  ngOnInit() {
  }

}
