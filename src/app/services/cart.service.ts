import { Injectable } from '@angular/core';
// import { IProduct } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

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
}
