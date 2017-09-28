import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoundPageModule } from './round-page';
import { StartPageModule } from './start-page';

import { RoundPageComponent } from './round-page/round-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { appRoutes } from './app.router';

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        RoundPageModule,
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        RoundPageComponent,
        GameGridComponent,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }