import { 
  AfterContentChecked,
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("serverElement")
  element:{type: string, name: string, content: string}

  @Input("name")
  name: string

  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("paragraphContent", {static: true}) paragraph: ElementRef

  constructor() { 
    console.log(`constructor called`)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(`ngOnChanges called`)
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(`ngOnInit called`)
    console.log(`template header ${this.header.nativeElement.textContent}`) //undefined here, so accessing nativeElement throws error
    console.log(`Text content of paragraph ${this.paragraph.nativeElement.textContent}`) //undefined here, so accessing nativeElement throws error
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck called`)
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`)
    console.log(`Text content of paragraph ${this.paragraph.nativeElement.textContent}`)
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`)
    console.log(`template header ${this.header.nativeElement.textContent}`)
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy called`)
  }

}
