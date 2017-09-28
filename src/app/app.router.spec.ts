import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

class DummyComponent { }

@Component({
    template: ''
})
class RoutingComponent { }

describe('Router', () => {
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    { path: '', component: DummyComponent }
                ])
            ],
            declarations: [RoutingComponent, DummyComponent]
        })
    });
});