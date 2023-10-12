import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-control';
  gameNumber: number = 0

  onIncrementNumber(gameNumber: number) {
    this.gameNumber = gameNumber
  }
}
