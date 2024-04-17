import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoComponent } from './components/directivas-de-atributo/directivas-de-atributo.component';
import { DirectivasEstructuralesComponent } from './components/directivas-estructurales/directivas-estructurales.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DirectivasDeAtributo2Component } from './components/directivas-de-atributo-2/directivas-de-atributo-2.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasDeAtributoComponent,
    DirectivasEstructuralesComponent,
    DirectivasDeAtributo2Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
