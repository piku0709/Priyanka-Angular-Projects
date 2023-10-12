import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class OddComponent implements OnInit {
  @Input("gameNumber")
  gameNumber: number = 2
  ngOnInit() {
    console.log(`game number from OddComponent: ${this.gameNumber}`)
  }
}
