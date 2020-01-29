import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  fun1() {
    this.el.nativeElement.style.background = 'red';
  }

  @HostListener('mouseleave')
  fun2() {
    this.el.nativeElement.style.background = null;
  }


}
