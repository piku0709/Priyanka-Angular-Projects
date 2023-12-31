import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener("mouseenter") mouseOver(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor
  }

  @HostListener("mouseleave") mouseLeave(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }

}
