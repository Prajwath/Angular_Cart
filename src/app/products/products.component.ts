import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  newProduct: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '' // Assuming you have an imageUrl property in your Product interface
  };
  searchQuery: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
  }

  addProduct(): void {
    if (
      this.newProduct.name.trim() &&
      this.newProduct.description.trim() &&
      this.newProduct.price > 0
    ) {
      this.productsService.addProduct({ ...this.newProduct });
      this.products = this.productsService.getProducts();
      this.filteredProducts = [...this.products]; // Update filteredProducts after adding a new product
      this.resetNewProduct();
    } else {
      alert('Please fill in all fields with valid values.');
    }
  }

  deleteProduct(index: number): void {
    this.productsService.deleteProduct(index);
    this.products = this.productsService.getProducts();
    this.filteredProducts = [...this.products]; // Update filteredProducts after deleting a product
  }

  private resetNewProduct(): void {
    this.newProduct = { name: '', description: '', price: 0, imageUrl: '' };
  }

  onSearch(): void {
    if (!this.searchQuery) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}