import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts = async () => {
    const resp = await this.cartService.getAllProducts();
    this.products = resp.data;
  }

  addToCart = (product) => {
    this.cartService.addToCart(product);
  }
}
