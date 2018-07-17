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

  updateProductData(newData: any): void {
    this.productData.next(newData);
  }

  createProduct(title: string, price: number, imageUrl?: string): Product {
    let id = this.generateId();
    if (imageUrl == null || imageUrl == "") {
      imageUrl = 'https://okfoodbank.org/wp/wp-content/uploads/2017/08/defaultImage.jpg'
    }
    const newProduct = new Product(id, title, price, imageUrl);
    return newProduct
  }


  generateId(): number {
    let idNum = Math.floor(Math.random() * 100000) + 1;
    return idNum
  }
}
