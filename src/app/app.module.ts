import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { SqrtPipePipe } from './pipes/sqrt-pipe.pipe';
import { SimpleDirective } from './directives/simple.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    SqrtPipePipe,
    SimpleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
