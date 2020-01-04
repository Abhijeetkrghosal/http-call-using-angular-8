import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private el: ElementRef) {

  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'red';

  }
  @HostListener('mouseenter') onMouseenter() {
    this.el.nativeElement.style.backgroundColor = 'black';

  }

}
