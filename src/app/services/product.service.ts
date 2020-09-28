import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'Product1','This is product1',100),
    new Product(2,'Product1','This is product2',150),
    new Product(3,'Product1','This is product3',100),
    new Product(4,'Product1','This is product4',250),
    new Product(5,'Product1','This is product5',500),
    new Product(6,'Product1','This is product6',350),
    new Product(7,'Product1','This is product7',400),
  ]

  constructor() { }

  getProducts(): Product[]{
    //todo populate prod from api and return observable
    return this.products
  }
}
