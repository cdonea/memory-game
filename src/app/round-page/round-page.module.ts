import { NgModule } from '@angular/core';

import { RoundPageComponent } from './round-page.component';
import { RoundPageService } from './round-page.service';
import { GameGridModule } from '../components/game-grid';

@NgModule({
    imports: [
        GameGridModule,
    ],
    providers: [
        RoundPageService
    ],
})

export class RoundPageModule { }