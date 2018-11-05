import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ReferenceComponent } from './reference/reference.component';
import { QualificationComponent } from './qualification/qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ReferenceComponent,
    QualificationComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
