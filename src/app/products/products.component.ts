// import { Component } from '@angular/core';

// export interface Product {
//   name: string;
//   description: string;
//   price: number;
// }

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
// })

// here im making a list of products 
// export class ProductsComponent {
//   products: Product[] = [
//     { name: 'Laptop', description: 'A powerful laptop', price: 1000 },
//     { name: 'Smartphone', description: 'A modern smartphone', price: 700 },
//   ];

  //this is newProduct funtion where im passing name,description and price
  // newProduct: Product = {
  //   name: '',
  //   description: '',
  //   price: 0,
  // };

// this is where im adding the products after triming it reference StackOverflow:https://stackoverflow.com/questions/72059383/how-can-i-add-new-product-using-angular-and-springboot
//and ducumentation :https://devdocs.io/angular~16/tutorial/first-app/first-app-lesson-05
  // addProduct() {
  //   if (
  //     this.newProduct.name.trim() &&
  //     this.newProduct.description.trim() &&
  //     this.newProduct.price > 0
  //   ) {
  //     this.products.push({ ...this.newProduct });
  //     this.resetNewProduct();
  //   } else {
  //     alert('Please fill in all fields with valid values.');
  //   }
  // }

// deleteProduct deleting over indexes starting from 1 >>> reference : ChatGPT
  // deleteProduct(index: number) {
  //   this.products.splice(index, 1);
  // }

// this also i have ChatGPt because i didnt know the syntext to parse the private variable  
//   private resetNewProduct() {
//     this.newProduct = { name: '', description: '', price: 0 };
//   }
// }






import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    name: '',
    description: '',
    price: 0,
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addProduct(): void {
    if (
      this.newProduct.name.trim() &&
      this.newProduct.description.trim() &&
      this.newProduct.price > 0
    ) {
      this.productsService.addProduct({ ...this.newProduct });
      this.products = this.productsService.getProducts();
      this.resetNewProduct();
    } else {
      alert('Please fill in all fields with valid values.');
    }
  }

  deleteProduct(index: number): void {
    this.productsService.deleteProduct(index);
    this.products = this.productsService.getProducts();
  }

  private resetNewProduct(): void {
    this.newProduct = { name: '', description: '', price: 0 };
  }
}
