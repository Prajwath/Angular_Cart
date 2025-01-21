import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';

declare var Razorpay: any; // Declare Razorpay to avoid TypeScript errors

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

  // Razorpay Integration for Buy Now
  buyNow(product: Product): void {
    const options = {
      key: 'rzp_test_4toTBhN05p28SN', // Replace with your Razorpay Key ID
      amount: product.price * 100, // Amount in paise
      currency: 'INR',
      name: 'Your Store Name', // Replace with your store's name
      description: product.description,
      image: 'https://example.com/your_logo', // Replace with your logo URL
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
      prefill: {
        name: 'Customer Name', // You can dynamically set the customer's name
        email: 'customer@example.com', // You can dynamically set the customer's email
        contact: '1234567890', // You can dynamically set the customer's contact
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#3399cc',
      },
      handler: (response: any) => {
        console.log('Payment successful:', response);
        alert('Payment was successful!');
      },
      modal: {
        ondismiss: () => {
          console.log('Transaction cancelled by user');
          alert('Transaction cancelled.');
        },
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
