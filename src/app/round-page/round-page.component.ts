import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { RoundPageService } from './round-page.service';

@Component({
    selector: 'round-component',
    templateUrl: './round-page.component.html',
    styleUrls: ['./round-page.component.css']
})

export class RoundPageComponent implements OnInit {

    @Output() randomTileSequence = new EventEmitter();
    public round: number;
    public gameStarted: boolean;

    private roundAnswers: number[] = [];
    private userAnswers: number[] = [];

    constructor(
        private RoundPageService: RoundPageService
    ) { }

    ngOnInit() {
        this.resetGame();
    }

    public startGame() {
        this.gameStarted = true;
    }

    public pushAnswer(event: any) {
        console.log(event);
    }

    public restartGame() {
        this.resetGame();
    }

    private generateRandomSequence(roundNumber: number): number[] {
        let sequence = [];
        for (let i = 0; i < roundNumber; i++) {
            sequence.push(Math.floor((Math.random() * 4)))
        }
        return sequence;
    }
    private resetGame() {
        this.round = 1;
        this.gameStarted = false;
        this.roundAnswers = [];
    }

    private newRound() {
        setTimeout(() => {
            this.increaseRound();
            this.roundAnswers = this.generateRandomSequence(this.round);
            this.randomTileSequence.emit(this.roundAnswers);
        }, 3000);

    }

    private increaseRound() {
        this.round = this.round + 1;
    }
}