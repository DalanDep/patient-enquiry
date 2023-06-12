import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { Resource } from '../../../patient/interfaces/patient.interface';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-common-functions',
    templateUrl: './common-functions.component.html',
    styleUrls: ['./common-functions.component.css']
})

export class CommonFunctionsComponent {

    constructor(private datePipe: DatePipe) {}

    getId(patient: Resource): string {
        if (patient && patient.id) {
            return `${patient.id}`;
        }
        return 'No data';
    }

    getLastUpdate(patient: Resource | undefined): string {
        if (patient && patient.meta.lastUpdated && patient.meta.lastUpdated) {
            return `${this.datePipe.transform(patient.meta.lastUpdated, 'dd/MM/yyyy HH:mm:ss') || 'No data'}`;
        }
        return 'No data';
    }

    getPatientName(patient: Resource): string {
        if (patient && patient.name) {
            for (let name of patient.name) {
                for (let given of name.given) {
                    return `${given}`;
                }
            }
        }
        return 'No data';
    }

    getPatientSurName(patient: Resource): string {
        if (patient && patient.name) {
            for (let name of patient.name) {
                return `${name.family}`;
            }
        }
        return 'No data';
    }

    getBirthDate(patient: Resource): string {
        if (patient && patient.birthDate) {
            return `${patient.birthDate}`;
        }
        return 'No data';
    }

    getGender(patient: Resource): string {
        if (patient && patient.gender) {
            return `${patient.gender}`;
        }
        return 'No data';
    }

    getPhoneNumber(patient: Resource): string {
        if (patient && patient.telecom) {
            for (let telecom of patient.telecom) {
                return `${telecom.value}`;
            }
        }
        return 'No data';
    }

    getAddress(patient: Resource): string {
        if (patient && patient.address) {
            for (let address of patient.address) {
                return `${address.text}`;
            }
        }
        return 'No data';
    }

}