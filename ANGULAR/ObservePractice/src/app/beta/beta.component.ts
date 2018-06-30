import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  task: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.task.subscribe(
      (task) => { this.task = task; }
    );
  }

}
