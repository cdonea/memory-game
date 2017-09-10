import { NgModule } from '@angular/core';

import { GameGridComponent } from './game-grid.component';
import { GameGridService } from './game-grid.service';

@NgModule({
    imports: [],
    declarations: [
        GameGridComponent
    ],
    providers: [GameGridService],
    exports: [
        GameGridComponent
    ]
})

export class GameGridModule { }