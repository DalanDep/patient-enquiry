import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { Error404PageComponent } from './error404-page.component';

describe('Error404PageComponent', () => {
    let component: Error404PageComponent;
    let fixture: ComponentFixture<Error404PageComponent>;
    let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(() => {
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);

        TestBed.configureTestingModule({
            declarations: [Error404PageComponent],
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

    it('should navigate to "/patient" on goToPatient()', () => {
        component.goToPatient();
        expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/patient');
    });
});
