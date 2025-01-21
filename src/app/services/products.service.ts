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
    {
      name: 'Laptop',
      description: 'A powerful laptop',
      price: 1000,
      imageUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8Y29kaW5nfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080'
    },
    {
      name: 'Smartphone',
      description: 'A modern smartphone',
      price: 700,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.U1TqELvCg1qB7OaBwBwoRwHaEU&pid=Api&P=0&h=220'
    },
    {
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      name: 'Camera',
      description: 'Professional DSLR camera',
      price: 800,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.SL7Mf-GkhsD_fnG12DDZewHaE8&pid=Api&P=0&h=220'
    },
    {
      name: 'Console',
      description: 'gaming console',
      price: 400,
      imageUrl: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGNvbnNvbGV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
      name: 'Tablet',
      description: 'Portable and powerful tablet',
      price: 300,
      imageUrl: 'https://cdn1.coppel.com/images/catalog/pm/2893283-1.jpg'
    },
    {
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch',
      price: 200,
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_r835usdaxar_galaxy_watch_active2_lte_1491584.jpg'
    },
    {
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with noise cancellation',
      price: 120,
      imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with high-quality sound',
      price: 80,
      imageUrl: 'https://www.bhphotovideo.com/images/images2000x2000/jbl_jblxtremebluus_xtreme_portable_bluetooth_speaker_1182619.jpg'
    },
    {
      name: 'Monitor',
      description: 'High-resolution computer monitor',
      price: 250,
      imageUrl: 'https://image-us.samsung.com/SamsungUS/home/easy-asset/cbsr-4811/01_S32C39_002_Front_Black.jpg'
    },
    {
      name: 'Laptop',
      description: 'A powerful laptop',
      price: 1000,
      imageUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8Y29kaW5nfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080'
    },
    {
      name: 'Smartphone',
      description: 'A modern smartphone',
      price: 700,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.U1TqELvCg1qB7OaBwBwoRwHaEU&pid=Api&P=0&h=220'
    },
    {
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      name: 'Camera',
      description: 'Professional DSLR camera',
      price: 800,
      imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      name: 'Console',
      description: 'gaming console',
      price: 400,
      imageUrl: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGNvbnNvbGV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
      name: 'Tablet',
      description: 'Portable and powerful tablet',
      price: 300,
      imageUrl: 'https://cdn1.coppel.com/images/catalog/pm/2893283-1.jpg'
    },
    {
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch',
      price: 200,
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_r835usdaxar_galaxy_watch_active2_lte_1491584.jpg'
    },
    {
      name: 'Wireless Earbuds',
      description: 'True wireless earbuds with noise cancellation',
      price: 120,
      imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with high-quality sound',
      price: 80,
      imageUrl: 'https://www.bhphotovideo.com/images/images2000x2000/jbl_jblxtremebluus_xtreme_portable_bluetooth_speaker_1182619.jpg'
    },
    {
      name: 'Monitor',
      description: 'High-resolution computer monitor',
      price: 250,
      imageUrl: 'https://image-us.samsung.com/SamsungUS/home/easy-asset/cbsr-4811/01_S32C39_002_Front_Black.jpg'
    }
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