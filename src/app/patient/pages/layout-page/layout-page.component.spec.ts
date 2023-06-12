import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutPageComponent } from './layout-page.component';

describe('LayoutPageComponent', () => {
    let component: LayoutPageComponent;
    let fixture: ComponentFixture<LayoutPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [LayoutPageComponent]
        });
        fixture = TestBed.createComponent(LayoutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render layout content', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')).toBeTruthy();
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
});
