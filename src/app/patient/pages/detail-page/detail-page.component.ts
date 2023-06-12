import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonFunctionsComponent } from 'src/app/shared/components/common-functions/common-functions.component';

import { Resource } from '../../interfaces/patient.interface';

import { PatientsService } from '../../services/patients.service';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

    public patient?: Resource;
    public noData: string = 'No data';
    public commonFunctions: CommonFunctionsComponent;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private patientService: PatientsService,
        private datePipe: DatePipe
    ) {
        this.commonFunctions = new CommonFunctionsComponent(this.datePipe);
    }
    
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
