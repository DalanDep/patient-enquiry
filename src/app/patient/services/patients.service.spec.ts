import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Patient, Resource, ResourceType, Status, Mode } from '../interfaces/patient.interface';

import { PatientsService } from './patients.service';

describe('PatientsService', () => {
    let service: PatientsService;
    let httpMock: HttpTestingController;

    const mockDataPatient: Patient = {
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

    const mockDataResource: Resource = {
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PatientsService]
        });
        service = TestBed.inject(PatientsService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    // It is run after each test, used to verify that there are no pending requests.
    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`should return an Observable<Patient>`, () => {
        service.getPatients().subscribe((data: Patient) => {
            expect(data).toEqual(mockDataPatient);
        });

        const req = httpMock.expectOne(`${service.getBaseUrl}/Patient`);
        expect(req.request.method).toBe('GET');
        req.flush(mockDataPatient);
    });

    it('should return patient by id', () => {
        const mockPatientId = '123';
        service.getPatientById(mockPatientId).subscribe(patient => {
            expect(patient).toEqual(mockDataResource);
        });

        const request = httpMock.expectOne(`${service.getBaseUrl}/Patient/${mockPatientId}`);
        expect(request.request.method).toBe('GET');
        request.flush(mockDataResource);
    });
});
