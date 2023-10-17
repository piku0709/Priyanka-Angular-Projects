import { Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding(`class.open`) isOpen: boolean = false

    @HostListener('click') toggleOpen(){
        //this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'open')
        this.isOpen = !this.isOpen
    }
}