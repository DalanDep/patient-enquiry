import { CardModule } from 'primeng/card';
import { CommonModule, DatePipe } from '@angular/common';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NgModule } from '@angular/core';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { PatientRoutingModule } from './patient-routing.module';


import { SharedModule } from '../shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
    declarations: [
        LayoutPageComponent,
        ListPageComponent,
        DetailPageComponent,
        PatientCardComponent
    ],
    providers: [
        DatePipe
    ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        CardModule,
        SkeletonModule,
        SharedModule
    ]
})
export class PatientModule { }
