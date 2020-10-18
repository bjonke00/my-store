import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];

  constructor(private cartService:CartService) {

   }

  ngOnInit() {
    this.cartService.getItems().subscribe(items=>this.items = items);
  }

  remove(product:Product){
    this.cartService.remove(product);
  }

  isUserLoggedIn(){
    return false;
  }

  isCartEmpty() : boolean{
    return this.items.length === 0;
  }

}
