import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ReferenceComponent } from './reference/reference.component';

export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    
    { path: 'personal', component: PersonalComponent },
    { path: 'qualification', component: QualificationComponent},
    { path: 'reference', component: ReferenceComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);