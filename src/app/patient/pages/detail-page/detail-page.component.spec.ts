import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { DetailPageComponent } from './detail-page.component';
import { NavegateToComponent } from 'src/app/shared/components/navegate-to/navegate-to.component';
import { of } from 'rxjs';
import { PatientsService } from '../../services/patients.service';
import { Resource, ResourceType, Status } from '../../interfaces/patient.interface';


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
            declarations: [DetailPageComponent, NavegateToComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivateRoute },
                { provide: PatientsService, useValue: mockPatientService },
                { provide: DatePipe, useValue: mockDatePipe },
            ],
            imports: [ButtonModule]
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

    
});
