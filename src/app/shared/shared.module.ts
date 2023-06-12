import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

import { ButtonModule } from 'primeng/button';
import { NavegateToComponent } from './components/navegate-to/navegate-to.component';
import { CommonFunctionsComponent } from './components/common-functions/common-functions.component';


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
