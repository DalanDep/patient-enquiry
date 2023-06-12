import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipe } from '@angular/common';

import { Resource, ResourceType, Status } from '../../../patient/interfaces/patient.interface';

import { CommonFunctionsComponent } from './common-functions.component';

describe('CommonFunctionsComponent', () => {
    let component: CommonFunctionsComponent;
    let fixture: ComponentFixture<CommonFunctionsComponent>;
    let datePipe: DatePipe;

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
        await TestBed.configureTestingModule({
            declarations: [CommonFunctionsComponent],
            providers: [DatePipe],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommonFunctionsComponent);
        component = fixture.componentInstance;
        datePipe = TestBed.inject(DatePipe);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getId', () => {
        it('should return the patient ID if available', () => {
            expect(component.getId(mockData));
        });
    });

    describe('getLastUpdate', () => {
        it('should return the formatted last update date if available', () => {
            const lastUpdated = new Date('2020-01-23T09:33:58.623+00:00');
            spyOn(datePipe, 'transform').and.returnValue('23/01/2020 09:33:58');
            expect(component.getLastUpdate(mockData)).toEqual('23/01/2020 09:33:58');
            expect(datePipe.transform).toHaveBeenCalledWith(lastUpdated, 'dd/MM/yyyy HH:mm:ss');
        });
    });

    describe('getPatientName', () => {
        it('should return the patient name if available', () => {
            expect(component.getPatientName(mockData));
        });
    });

    describe('getPatientSurName', () => {
        it('should return the patient surname if available', () => {
            expect(component.getPatientSurName(mockData));
        });
    });

    describe('getBirthDate', () => {
        it('should return the patient birth date if available', () => {
            expect(component.getBirthDate(mockData)).toEqual('14/11/2000');
        });
    });

    describe('getGender', () => {
        it('should return the patient gender if available', () => {
            expect(component.getGender(mockData));
        });
    });

    describe('getPhoneNumber', () => {
        it('should return the patient phone number if available', () => {
            expect(component.getPhoneNumber(mockData));
        });
    });

    describe('getAddress', () => {
        it('should return the patient address if available', () => {
            expect(component.getAddress(mockData));
        });
    });
});
