import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class RoundPageService {


    @Output() randomTileSequence = new EventEmitter();

    private _round: number;
    private _gameStarted: boolean;

    private roundAnswers: number[] = [];
    private userAnswers: number[] = [];

    constructor() {
        this.resetRound();
    }

    public get round() {
        return this._round;
    }
    public set round(round) {
        this._round = round;
    }

    public get gameStarted() {
        return this._gameStarted;
    }
    public set gameStarted(gameStarted) {
        this._gameStarted = gameStarted;
    }

    public startGame() {
        this.gameStarted = true;
        this.newRound(1);
    }

    public pushAnswer(event: number) {
        console.log(event, this);
        let answersCount = this.userAnswers.length;
        if( answersCount &&  answersCount < this.round) {
            this.userAnswers.push(event);
        } else {
            alert('Too many');
        }
        
    }

    public restartGame() {
        this.resetRound();
        this.newRound(1);
    }

    private generateRandomSequence(round: number): number[] {
        let sequence = [];
        for (let i = 0; i < 3 + round; i++) {
            sequence.push(Math.floor((Math.random() * 4)))
        }
        return sequence;
    }
    private resetRound() {
        this.round = 1;
        this.roundAnswers = [];
        this.userAnswers = [];
        this.gameStarted = false;
    }

    private newRound(round: number) {
        this.roundAnswers = this.generateRandomSequence(round);

        console.log('game started', this.roundAnswers);
        this.randomTileSequence.emit(this.roundAnswers);


    }
} 