import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { RoundPageService } from './round-page.service';

@Component({
    selector: 'round-component',
    templateUrl: './round-page.component.html',
    styleUrls: ['./round-page.component.css']
})

export class RoundPageComponent implements OnInit {
    public round: number;
    public gameStarted: boolean;

    constructor(
        private roundSrv: RoundPageService
    ) { }


    ngOnInit() {
        this.round = this.roundSrv.round;
        this.gameStarted = this.roundSrv.gameStarted;
    }

    public startGame() {
        this.roundSrv.startGame();
    }
    public pushAnswer(event: number) {
        this.roundSrv.pushAnswer(event);
    }
}