import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CommonFunctionsComponent } from 'src/app/shared/components/common-functions/common-functions.component';
import { Resource } from '../../interfaces/patient.interface';

@Component({
    selector: 'app-patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
    
    @Input()
        // the as Resource is used to prevent the property from being undefined if no value is obtained from the parent, if this happens the value will be empty.
    public patient?: Resource = {} as Resource;
    public commonFunctions: CommonFunctionsComponent;

    constructor(
        private datePipe: DatePipe
    ) {
        this.commonFunctions = new CommonFunctionsComponent(this.datePipe);
    }

    ngOnInit(): void {
        if (!this.patient) {
            throw new Error('Patient information is required');
        }
    }
}
