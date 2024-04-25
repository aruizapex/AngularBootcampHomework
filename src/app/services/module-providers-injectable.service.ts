import { Injectable } from '@angular/core';
import { ModuleProvidersInjectableModule } from '@components/module-providers-injectable/module-providers-injectable.module';

@Injectable({
  providedIn: ModuleProvidersInjectableModule
})
export class ModuleProvidersInjectableService {

  constructor() { }

  numbers: string[] = ['one', 'two']
}
