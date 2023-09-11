import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;

  makeMove(index: number): void {
    if (!this.squares[index] && !this.winner) {
      this.squares[index] = this.xIsNext ? 'X' : 'O';
      this.xIsNext = !this.xIsNext;
      this.calculateWinner();
    }
  }

  calculateWinner(): void {
    // Implement your win condition logic here
  }
}
