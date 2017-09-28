import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'game-grid',
    templateUrl: './game-grid.component.html',
    styleUrls: ['./game-grid.component.css']
})

export class GameGridComponent {
    @Output() tileUpdated: EventEmitter<number> = new EventEmitter();
    // private tile: number;
    constructor() {

    }

    public getTileColor(order: number) {
        this.tileUpdated.emit(order);
    }

    public lightTiles() {
        setTimeout(() => {
            
        }, 3000);
    }
}

