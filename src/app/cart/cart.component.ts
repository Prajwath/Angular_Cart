import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Load the cart products from the service
    this.cart = this.productsService.getCart();
  }

  // Remove item from cart
  removeFromCart(index: number): void {
    this.productsService.removeFromCart(index);
    this.cart = this.productsService.getCart();
  }
}
