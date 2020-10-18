import { Injectable } from '@angular/core';
import { Product } from './product';
import { products } from './products';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  //   getProducts():Product[]{
  //   return products;
  // }

  getProducts() : Observable<Product[]>{
    return of(products);
  }

  getProduct(id:number) : Observable<Product>{
    return of(products.find(product=>product.id===id));
  }

}
