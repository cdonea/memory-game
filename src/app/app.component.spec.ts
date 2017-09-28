import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { RoundPageComponent } from './round-page/round-page.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { RoundPageService } from './round-page/round-page.service';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        RoundPageService
      ],
      declarations: [
        AppComponent,
        RoundPageComponent,
        GameGridComponent,
      ]
    });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});