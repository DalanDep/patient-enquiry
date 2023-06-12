import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Patient } from '../../interfaces/patient.interface';

import { PatientsService } from '../../services/patients.service';


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

    public patient?: Patient;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private patientService: PatientsService,
    ) { }
    
    ngOnInit(): void {
        this.activateRoute.params
            .pipe(switchMap(({ id }) => this.patientService.getPatientById(id)))
            .subscribe(patient => {
                if (!patient) {
                    this.router.navigateByUrl('/patient')
                } else {
                    this.patient = patient;
                }
            });
    }

}
