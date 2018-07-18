import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './models/product';
import { Samples } from './models/samples';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = Samples;

  productData: BehaviorSubject<any[]> = new BehaviorSubject(this.products)

  constructor() { }

  updateProductData(newData: Product[]): void {
    this.productData.next(newData);
  };

  createProduct(title: string, price: number, imageUrl?: string): Product {
    let id = this.generateId();
    if (imageUrl == null || imageUrl == "") {
      imageUrl = 'https://okfoodbank.org/wp/wp-content/uploads/2017/08/defaultImage.jpg'
    }
    const newProduct = new Product(id, title, price, imageUrl);
    return newProduct
  };

  generateId(): number {
    let idNum = Math.floor(Math.random() * 100000) + 1;
    return idNum
  };

  deleteProduct(idNum): void {
    for (let i = this.products.length - 1; i >= 0; i--) {
      if (this.products[i].id === idNum) {
        let removed = this.products.splice(i, 1);
        console.log('removed', removed);
      }
    }
  };
}
