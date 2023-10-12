import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class OddComponent{
  @Input("gameNumber")
  gameNumber: number = 2
}
