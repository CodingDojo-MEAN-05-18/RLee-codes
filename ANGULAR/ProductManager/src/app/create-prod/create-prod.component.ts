import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.css']
})
export class CreateProdComponent implements OnInit {

  product: Product = new Product( null, null, null, null );
  newProduct: Product;
  products: Array<Product> = this.productService.products;

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.product);
  //use data from form, bound to this.product to call the createProduct method from the product service in order to generate the random id and supply a default imageUrl
    this.newProduct = this.productService.createProduct(this.product.title, this.product.price, this.product.imageUrl);
  //push the newProduct into the products array
    this.products.push(this.newProduct)
  //use the updateProductData to update the BehaviorSubject in the product service to stream the data to the Product List.
    this.productService.updateProductData(this.products);
    form.reset();
    this.router.navigate(['/products']);
  }

  ngOnInit() {
  }

}
