import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
    {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
    },
    {
        path: 'error404',
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: 'patient',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'error404',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
