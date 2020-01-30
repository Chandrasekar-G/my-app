import { Component } from '@angular/core';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  template: `
   <app-product></app-product>
   <app-cart></app-cart>
   <app-parent></app-parent>
  `
})
export class AppComponent {

}
