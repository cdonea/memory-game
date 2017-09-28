import { Router, Routes } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';

export const appRoutes: Routes = [
    { path: '', component: StartPageComponent,
    data: { title: 'Heroes List' } }
];
