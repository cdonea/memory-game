import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RoundPageModule } from './round-page';
import { GameGridModule } from './components/game-grid';

@NgModule({
    imports: [
        BrowserModule,
        RoundPageModule,
        GameGridModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }