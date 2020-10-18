import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[];
  // cart:number[]=[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  // synchronous basic
  // getProducts(): void{
  //   this.products = this.productService.getProducts();
  // }

  // asynchoronous observable
  getProducts() : void {
    this.productService.getProducts()
    .subscribe(products=>this.products = products);
  }
  
  //TODO : Add CART component and service
  // addToCart(id:number){
  //   this.cart.push(id);
  //   console.log(event);
  // }

  // isEmpty(){
  //   return this.cart.length === 0 ? true : false;
  // }

}
