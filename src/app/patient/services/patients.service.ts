import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class PatientsService {

    private readonly baseUrl: string = 'http://hapi.fhir.org/baseR4';

    constructor( private http: HttpClient) {}

    // Get is done to be able to use baseUrl in unit tests
    get getBaseUrl(): string {
        return this.baseUrl;
    }

    getPatients(): Observable<Patient> {
        return this.http.get<Patient>(`${this.baseUrl}/Patient`);
    }

    // A patient is obtained through an id, it is possible to access directly by entering an id from the browser
    getPatientById(id: string): Observable<Patient> { 
        return this.http.get<Patient>(`${this.baseUrl}/Patient/${id}`);
    }
}
