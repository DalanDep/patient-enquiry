import { Component, OnInit } from '@angular/core';

import { PatientsService } from '../../services/patients.service';
import { Patient } from '../../interfaces/patient.interface';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

    public patients!: Patient;
    
    constructor(private patientsService: PatientsService,) {}
    
    ngOnInit(): void {
        this.patientsService.getPatients().subscribe(
            patients => this.patients = patients
        );
    }
}
