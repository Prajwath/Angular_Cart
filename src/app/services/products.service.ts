import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    { name: 'Laptop', description: 'A powerful laptop', price: 1000 },
    { name: 'Smartphone', description: 'A modern smartphone', price: 700 },
  ];

  private cart: Product[] = [];
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.cart);

  constructor() {}

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  getProductByIndex(index: number): Product | null {
    return this.products[index] ?? null;
  }

  // Add product to cart and emit cart changes
  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart); // Emit new cart data
  }

  // Get all cart items
  getCart(): Product[] {
    return [...this.cart];
  }

  // Remove product from cart
  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.cartSubject.next(this.cart); // Emit new cart data
  }

  // Get cart count
  getCartCount(): number {
    return this.cart.length;
  }

  // Observable for cart count updates
  getCartCountObservable() {
    return this.cartSubject.asObservable();
  }
}
