import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoComponent } from './components/directivas-de-atributo/directivas-de-atributo.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DirectivasDeAtributo2Component } from './components/directivas-de-atributo-2/directivas-de-atributo-2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DirectivasCustomComponent } from './components/directivas-custom/directivas-custom.component';
import { CapitalizeDirective } from './components/directivas-custom/capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasDeAtributoComponent,
    DirectivasDeAtributo2Component,
    DirectivasCustomComponent,
    CapitalizeDirective
  ],
  imports: [
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
