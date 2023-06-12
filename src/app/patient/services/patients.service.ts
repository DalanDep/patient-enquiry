import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class PatientsService {

    private readonly baseUrl: string = 'http://hapi.fhir.org/baseR4';

    constructor(
        private http: HttpClient
    ) { }

    getPatients(): Observable<Patient> {
        return this.http.get<Patient>(`${this.baseUrl}/Patient`);
    }
}
