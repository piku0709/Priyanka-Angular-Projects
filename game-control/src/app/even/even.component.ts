import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom //None, Emulated, ShadowDom
})
export class EvenComponent {
  @Input("gameNumber")
  gameNumber: number = 1
}
