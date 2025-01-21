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
        name: 'Customer Name', // Replace with dynamic user data
        email: 'customer@example.com',
        contact: '1234567890',
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#3399cc',
      },
      handler: (response: any) => {
        console.log('Payment successful:', response);
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      modal: {
        ondismiss: () => {
          console.log('Transaction cancelled by user');
          alert('Transaction cancelled.');
        },
      },
    };

    try {
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Failed to initialize payment. Please try again later.');
    }
  }
}
