import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';


@NgModule({
    declarations: [
        LayoutPageComponent,
        ListPageComponent,
        DetailPageComponent
    ],
    imports: [
        CommonModule,
        PatientRoutingModule
    ]
})
export class PatientModule { }
