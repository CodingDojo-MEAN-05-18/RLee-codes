import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productData.subscribe(
      (data) => { this.productList = data; }
    );
  }

}
