import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  param: string;
  // params.id =>  ??

  constructor( private route: ActivatedRoute ) {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    })
}
  ngOnInit() {
  }

}
