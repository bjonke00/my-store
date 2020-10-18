import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../products';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService
             ) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .subscribe(product=>this.product = product);
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
  }

}
