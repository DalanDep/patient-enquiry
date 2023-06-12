import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { PatientsService } from '../../services/patients.service';

import { Resource, ResourceType, Status } from '../../interfaces/patient.interface';

import { DetailPageComponent } from './detail-page.component';

describe('DetailPageComponent', () => {
    let component: DetailPageComponent;
    let fixture: ComponentFixture<DetailPageComponent>;
    let mockRouter: Partial<Router>;
    let mockActivateRoute: Partial<ActivatedRoute>;
    let mockPatientService: Partial<PatientsService>;
    let mockDatePipe: Partial<DatePipe>;

    const mockData: Resource = {
        "resourceType": ResourceType.Patient,
        "id": "592080",
        "meta": {
            "versionId": "1",
            "lastUpdated": new Date("2020-01-23T09:33:58.623+00:00"),
            "source": "#TxHlcnq3KZSdg567"
        },
        "text": {
            "status": Status.Generated,
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">TE <b>POTE </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>002</td></tr><tr><td>Address</td><td><span>3300 Washtenaw </span><br/><span>Ann Harbor </span><span>MI </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>14 November 2000</span></td></tr></tbody></table></div>"
        },
        "identifier": [
            {
                "system": "http://example.org",
                "value": "002"
            }
        ],
        "name": [
            {
                "use": "official",
                "family": "POTE",
                "given": [
                    "TE"
                ]
            }
        ],
        "telecom": [
            {
                "system": "phone",
                "value": "(03) 2019 1114",
                "use": "home"
            }
        ],
        "gender": "male",
        "birthDate": new Date("2000-11-14"),
        "address": [
            {
                "use": "home",
                "text": "3300 Washtenaw Ann Harbor, MI 48104, USA",
                "line": [
                    "3300 Washtenaw"
                ],
                "city": "Ann Harbor",
                "state": "MI",
                "postalCode": "48104",
                "country": "USA"
            }
        ]
    }

    beforeEach(async () => {
        mockActivateRoute = {
            params: of({ id: 'patientId' })
        };

        mockRouter = {
            navigateByUrl: jasmine.createSpy('navigate')
        };

        mockPatientService = {
            getPatientById: jasmine.createSpy('getPatientById').and.returnValue(of(mockData)),
        };

        mockDatePipe = {
            transform: jasmine.createSpy('transform').and.returnValue('transformedDate')
        };
        
        await TestBed.configureTestingModule({
            declarations: [DetailPageComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivateRoute },
                { provide: PatientsService, useValue: mockPatientService },
                { provide: DatePipe, useValue: mockDatePipe }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DetailPageComponent]
        });
        fixture = TestBed.createComponent(DetailPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to "/patient" when patient is not found', () => {
        (mockPatientService.getPatientById as jasmine.Spy).and.returnValue(of(undefined));
        component.ngOnInit();
        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/patient');
    });

    it('should set patient when patient is found', () => {
        (mockPatientService.getPatientById as jasmine.Spy).and.returnValue(of(mockData));
        component.ngOnInit();
        expect(component.patient).toEqual(mockData);
    });

    describe('getId', () => {
        it('should return patient id when patient exists', () => {
            const patient = { id: '592080' };
            component.patient = patient as any;
            const result = component.getId();
            expect(result).toBe('592080');
        });

        it('should return "No data" when patient id is falsy', () => {
            const patient = { id: '' };
            component.patient = patient as any;
            const result = component.getId();
            expect(result).toBe('No data');
        });
    });

    it('should get last update date', () => {
        component.patient = { meta: { lastUpdated: '2023-06-12T00:00:00Z' } } as any;
        expect(component.getLastUpdate()).toBe('transformedDate');
        component.patient = undefined;
        expect(component.getLastUpdate()).toBe('No data');
    });

    it('should get patient name', () => {
        component.patient = { name: [{ given: ['John'] }] } as any;
        expect(component.getPatientName()).toBe('John');
        component.patient = undefined;
        expect(component.getPatientName()).toBe('No data');
    });

    it('should get patient surname', () => {
        component.patient = { name: [{ family: 'Doe' }] } as any;
        expect(component.getPatientSurName()).toBe('Doe');
        component.patient = undefined;
        expect(component.getPatientSurName()).toBe('No data');
    });

    it('should get birth date', () => {
        component.patient = { birthDate: '1990-01-01' } as any;
        expect(component.getBirthDate()).toBe('1990-01-01');
        component.patient = undefined;
        expect(component.getBirthDate()).toBe('No data');
    });

    it('should get gender', () => {
        component.patient = { gender: 'Male' } as any;
        expect(component.getGender()).toBe('Male');
        component.patient = undefined;
        expect(component.getGender()).toBe('No data');
    });

    it('should get phone number', () => {
        component.patient = { telecom: [{ value: '123456789' }] } as any;
        expect(component.getPhoneNumber()).toBe('123456789');
        component.patient = undefined;
        expect(component.getPhoneNumber()).toBe('No data');
    });

    it('should get address', () => {
        component.patient = { address: [{ text: '123 Street' }] } as any;
        expect(component.getAddress()).toBe('123 Street');
        component.patient = undefined;
        expect(component.getAddress()).toBe('No data');
    });
});
