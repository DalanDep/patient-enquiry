import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

import { Resource } from '../../interfaces/patient.interface';

import { PatientsService } from '../../services/patients.service';


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

    public patient?: Resource;
    public noData: string = 'No data';

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private patientService: PatientsService,
        private datePipe: DatePipe
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

    getId(): string {
        if (this.patient && this.patient.id) {
            return `${this.patient.id}`;
        }
        return 'No data';
    }

    getLastUpdate(): string {
        if (this.patient && this.patient.meta.lastUpdated && this.patient.meta.lastUpdated) {
            return `${this.datePipe.transform(this.patient.meta.lastUpdated, 'dd/MM/yyyy HH:mm:ss') || 'No data'}`;
        }
        return 'No data';
    }

    getPatientName(): string {
        if (this.patient && this.patient.name) {
            for (let name of this.patient.name) {
                for (let given of name.given) {
                    return `${given}`;
                }
            }
        }
        return 'No data';
    }

    getPatientSurName(): string {
        if (this.patient && this.patient.name) {
            for (let name of this.patient.name) {
                return `${name.family}`;
            }
        }
        return 'No data';
    }

    getBirthDate(): string {
        if (this.patient && this.patient.birthDate) {
            return `${this.patient.birthDate}`;
        }
        return 'No data';
    }

    getGender(): string {
        if (this.patient && this.patient.gender) {
            return `${this.patient.gender}`;
        }
        return 'No data';
    }

    getPhoneNumber(): string {
        if (this.patient && this.patient.telecom) {
            for (let telecom of this.patient.telecom) {
                return `${telecom.value}`;
            }
        }
        return 'No data';
    }

    getAddress(): string {
        if (this.patient && this.patient.address) {
            for (let address of this.patient.address) {
                return `${address.text}`;
            }
        }
        return 'No data';
    }

}
