import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addToCart(product:Product){
    if(!this.items.includes(product)){
      this.items.push(product); 
    }
    this.items[this.items.indexOf(product)].quantity++;   
  }

  getItems() : Observable<Product[]>{
    return of(this.items);
  }

  remove(product: Product){
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items[index].quantity=0;
      this.items.splice(index, 1);
    }
  }

}
