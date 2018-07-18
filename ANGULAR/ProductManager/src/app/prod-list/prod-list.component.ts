import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.productData.subscribe(
      (data) => { this.productList = data; }
    );
  }

  onClickDelete(idNum): void {
    this.productService.deleteProduct(idNum);
  };

  onClickUpdate(idNum): void {
    console.log(`selected product id = ${idNum}`);
    this.router.navigate(['/products', 'edit', `${idNum}`]);
  }

}
