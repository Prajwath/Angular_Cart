// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Product } from 'src/app/services/products.service';
// import { using } from 'rxjs';

// @Component({
//   selector: 'app-product-item',
//   templateUrl: './product-item.component.html',
//   styleUrls: ['./product-item.component.css'],
// })

// using the Input for the Products used documents:https://devdocs.io/angular~16/tutorial/first-app/first-app-lesson-05
// for Output on delete i used this website https://www.pluralsight.com/resources/blog/guides/posting-deleting-putting-data-angular
// and also chatgpt for error filteration and smooth work
// export class ProductItemComponent {
//   @Input() product!: Product;
//   @Output() delete = new EventEmitter<void>();

//   onDelete() {
//     this.delete.emit();
//   }
// }




import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  onDelete() {
    this.delete.emit();
  }

  addToCart() {
    if (this.product) {
      this.productsService.addToCart(this.product);
    }
  }
}
