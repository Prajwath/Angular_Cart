// src/app/products/products.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import { Router } from '@angular/router';

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
    imageUrl: ''
  };
  searchQuery: string = '';
  showAddForm: boolean = false; // New boolean flag to control form visibility

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
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
      this.showAddForm = false; // Hide the form after adding the product
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

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }
}