
export class Product {

  public id: number;
  public title: string;
  public price: number;
  public imageUrl: string;

  constructor(id, title, price, imageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
  }

 }
