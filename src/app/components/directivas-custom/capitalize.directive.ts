import { AfterViewInit, Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective implements AfterViewInit{

  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const text: string = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = text.charAt(0).toUpperCase() + text.slice(1);
    this.el.nativeElement.style.fontWeight = 700
  }

}
