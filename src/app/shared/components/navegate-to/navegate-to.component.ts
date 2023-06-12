import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navegate-to',
    templateUrl: './navegate-to.component.html',
    styleUrls: ['./navegate-to.component.css']
})
export class NavegateToComponent {
    
    constructor( private router: Router ) { }

    goToPatient(): void {
        this.router.navigateByUrl('/patient');
    }

}
