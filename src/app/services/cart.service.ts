import { Injectable } from '@angular/core';
// import { IProduct } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private _cartCount : BehaviorSubject<number>;

  constructor(private http: HttpClient) { 
    this._cartCount = new BehaviorSubject(0);
  }

  public getAllProducts = async () => {
    try {
      const resp = await this.http.get('https://api.myjson.com/bins/m73ha').toPromise();
      return {
        isSuccess: true,
        data: resp
      };
    } catch (e) {
      return {
        isSuccess: false,
        error: e
      };
    }
  }

  public addToCart = (product) => {
    this.cartItems.push(product);
    console.log(this.cartItems);
    this._cartCount.next(this.cartItems.length);
  }

  public getCartCount = () => {
    return this._cartCount.asObservable();
  }
}
