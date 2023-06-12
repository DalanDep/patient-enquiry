import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegateToComponent } from '../../components/navegate-to/navegate-to.component';
import { ButtonModule } from 'primeng/button';

import { Error404PageComponent } from './error404-page.component';

describe('Error404PageComponent', () => {
    let component: Error404PageComponent;
    let fixture: ComponentFixture<Error404PageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Error404PageComponent,
                NavegateToComponent],
            imports: [
                ButtonModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Error404PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
