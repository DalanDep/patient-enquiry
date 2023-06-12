import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [
        Error404PageComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ],
    exports: [
        Error404PageComponent
    ]
})
export class SharedModule { }
