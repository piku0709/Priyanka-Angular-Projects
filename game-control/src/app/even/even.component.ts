import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class EvenComponent {
  @Input("gameNumber")
  gameNumber: number = 1
  ngOnInit() {
    console.log(`game number from EvenComponent: ${this.gameNumber}`)
  }
}
