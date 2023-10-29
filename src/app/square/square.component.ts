import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'app-square',
  template: `
    <div
      class="game-square rounded-lg border bg-teal-lightest
      shadow-md "
      (click)="changePlayer()"
      [ngClass]="{noClick: gameService.winner} "
    >
      <p class="text-grey-darker"> {{ square.state}} </p>
    </div>
   `,
  styles: [`
    .game-square {
      background-color: darkgrey;
      height: 96% !important;
      text-align: center  !important;
      cursor: pointer  !important;
    }

    p {
      display: inline  !important;
      margin: 0px  !important;
      font-size: 7rem  !important;
      overflow: hidden  !important;
    }

    .noClick {
      pointer-events: none  !important;
    }

    .border {
      border-width: 1px;
    }

    .shadow-md {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
    }

    .bg-teal-lightest {
      background-color: #e8fffe;
    }

    `
  ]
})
export class SquareComponent implements OnInit {

  @Input() square:any;

  constructor( public gameService: GameService) { }

  ngOnInit() {
  }

  changePlayer(){

    this.gameService.isGameRunning = true;

    if ( this.gameService.isGameRunning && this.square.state === null ){
      this.square.state =  this.gameService.activePlayer;
      this.gameService.changePlayerTurn( this.square);
    }

  }

}
