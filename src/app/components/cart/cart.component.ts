import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartCount: number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscribeToCart();
  }

  subscribeToCart = () => {
    this.cartService.getCartCount().subscribe(data => {
      this.cartCount = data;
    });
  }

}
