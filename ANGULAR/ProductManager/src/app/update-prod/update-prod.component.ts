import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})
export class UpdateProdComponent implements OnInit {

  id: string;
  product: Product;
  products: Product[] = this.productService.products;
  index: number;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {

    this.route.paramMap.subscribe(params => {
      this.id = (params.get('id'));
      // console.log(params.get('id'));
    })
   }

  ngOnInit() {
    this.product = this.products.find(product => { return product.id.toString(10) === this.id });
    this.index = this.products.indexOf(this.product);
  }

  onSubmitUpdate(event): void{
    event.preventDefault();
    console.log('update submitted', this.product, `to index ${this.index}`);
  //update the product in the products array in the local component
    this.products[this.index] = this.product;
  //submit the updated product array to the productService methid that updates the observable which feeds the ProductListComponent
    this.productService.updateProductData(this.products);
  //route to the product ProductListComponent
    this.router.navigate(['/products']);
  }
}
