import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor() {}

  resetGame(): void {
    // Add logic to reset the game here
  }
}
