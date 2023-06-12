import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

import { PatientCardComponent } from './components/patient-card/patient-card.component';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
    declarations: [
        LayoutPageComponent,
        ListPageComponent,
        DetailPageComponent,
        PatientCardComponent
    ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        CardModule,
        SkeletonModule
    ]
})
export class PatientModule { }
