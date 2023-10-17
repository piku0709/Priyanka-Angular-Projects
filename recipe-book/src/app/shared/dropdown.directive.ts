import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

    @Input() defaultClass: string = 'none'
    @Input() openClass: string = 'open'

    @HostBinding(`class`) elementClass: string = this.defaultClass

    constructor(private elementRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(): void {
        this.elementClass = this.defaultClass
    }

    @HostListener('mouseenter') onMouseEnter(){
        //this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'open')
        this.elementClass = this.openClass
    }

    @HostListener('mouseleave') onMouseLeave(){
        //this.renderer.setAttribute(this.elementRef.nativeElement, 'class', '')
        this.elementClass = this.defaultClass
    }

}