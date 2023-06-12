import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Patient, ResourceType, Status, Mode } from '../../interfaces/patient.interface';

import { DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';

import { PatientCardComponent } from './patient-card.component';

describe('PatientCardComponent', () => {
    let component: PatientCardComponent;
    let fixture: ComponentFixture<PatientCardComponent>;
    let datePipe: DatePipe;

    const mockData: Patient = {
        "resourceType": "Bundle",
        "id": "5a51f92d-28fb-423c-b498-e1a59d7d59e4",
        "meta": {
            "lastUpdated": new Date("2023-06-10"),
        },
        "type": "searchset",
        "link": [
            {
                "relation": "self",
                "url": "https://hapi.fhir.org/baseR4/Patient"
            },
            {
                "relation": "next",
                "url": "https://hapi.fhir.org/baseR4?_getpages=5a51f92d-28fb-423c-b498-e1a59d7d59e4&_getpagesoffset=20&_count=20&_pretty=true&_bundletype=searchset"
            }
        ],
        "entry": [
            {
                "fullUrl": "https://hapi.fhir.org/baseR4/Patient/592080",
                "resource": {
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
                },
                "search": {
                    "mode": Mode.Match,
                }
            },
            {
                "fullUrl": "https://hapi.fhir.org/baseR4/Patient/592228",
                "resource": {
                    "resourceType": ResourceType.Patient,
                    "id": "592228",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": new Date("2020-01-23T18:30:44.607+00:00"),
                        "source": "#uX9WMCHa3q4toLJK"
                    },
                    "text": {
                        "status": Status.Generated,
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Jumbi <b>XEL </b></div><table class=\"hapiPropertyTable\"><tbody></tbody></table></div>"
                    },
                    "name": [
                        {
                            "family": "Xel",
                            "given": [
                                "Jumbi"
                            ]
                        }
                    ]
                },
                "search": {
                    "mode": Mode.Match
                }
            }
        ]
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PatientCardComponent],
            imports: [
                RouterTestingModule,
                CardModule
            ],
            providers: [
                DatePipe
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(PatientCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#ngOnInit', () => {
        it('should set patient', () => {
            component.patient = mockData.entry[0].resource;
            component.ngOnInit();
            expect(component.patient).toEqual(mockData.entry[0].resource);
        });

        it('should throw an error if there is no patient information', () => {
            component.patient = undefined;
            expect(() => {
                component.ngOnInit();
            }).toThrowError('Patient information is required');
        });

        it('should not throw an error if patient information is present', () => {
            component.patient = mockData.entry[0].resource;
            expect(() => {
                component.ngOnInit();
            }).not.toThrowError('Patient information is required');
        });
    });

    it('should render card', () => {
        const cardElement = fixture.nativeElement;
        expect(cardElement.querySelector('p-card')).toBeTruthy();
    });
});
