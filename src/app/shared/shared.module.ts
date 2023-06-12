import { ButtonModule } from 'primeng/button';
import { CommonFunctionsComponent } from './components/common-functions/common-functions.component';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NgModule } from '@angular/core';

import { NavegateToComponent } from './components/navegate-to/navegate-to.component';


@NgModule({
    declarations: [
        Error404PageComponent,
        NavegateToComponent,
        CommonFunctionsComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ],
    exports: [
        Error404PageComponent,
        NavegateToComponent,
        CommonFunctionsComponent
    ]
})
export class SharedModule { }
