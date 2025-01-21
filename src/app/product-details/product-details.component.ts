import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productDetails = this.productsService.getProductByIndex(Number(id));
    }
  }
}
