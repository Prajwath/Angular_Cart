import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from './services/products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import RxJS map operator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cartCount$: Observable<number>; // Observable for cart count

  constructor(private productsService: ProductsService) {
    // Initialize cartCount$ to track changes in the cart
    this.cartCount$ = this.productsService
      .getCartCountObservable()
      .pipe(
        map((cart: Product[]) => cart.length) // Explicitly type 'cart' as an array of Product
      );
  }

  ngOnInit() {
    // No manual cart count fetching is needed due to observable usage
  }
}
