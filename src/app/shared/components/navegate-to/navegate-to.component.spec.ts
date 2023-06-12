import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { NavegateToComponent } from './navegate-to.component';

describe('NavegateToComponent', () => {
    let component: NavegateToComponent;
    let fixture: ComponentFixture<NavegateToComponent>;
    let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(() => {
        const routerSpyObj = jasmine.createSpyObj('Router', ['navigateByUrl']);
        TestBed.configureTestingModule({
            declarations: [NavegateToComponent],
            imports: [
                ButtonModule
            ],
            providers: [
                { provide: Router, useValue: routerSpyObj }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavegateToComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to "/patient" on goToPatient()', () => {
        component.goToPatient();
        expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/patient');
    });
});
