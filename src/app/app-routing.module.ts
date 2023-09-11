import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'board', component: BoardComponent },
  // Define more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
