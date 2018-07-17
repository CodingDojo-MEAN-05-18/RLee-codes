import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})
export class UpdateProdComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      this.id = (params.get('id'));
      console.log(params.get('id'));
    })
   }

  ngOnInit() {
  }

}
