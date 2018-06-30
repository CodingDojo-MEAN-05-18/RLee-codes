import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  item: string;
  task: any[] = [];

  constructor(private taskService: TaskService) { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault;
    console.log('form submitted', this.item);
    this.task.push(this.item);
    form.reset();
  }

  ngOnInit() {
    this.taskService.task.subscribe(
      (task) => { this.task = task; }
    );
  }

}
