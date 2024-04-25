import { Component } from '@angular/core';
import { ModuleProvidersInjectableService } from '@services/module-providers-injectable.service';
import { RootInjectableService } from '@services/root-injectable.service';

@Component({
  selector: 'app-module-providers-injectable',
  templateUrl: './module-providers-injectable.component.html',
  styleUrl: './module-providers-injectable.component.scss'
})
export class ModuleProvidersInjectableComponent {
  constructor(
    protected moduleProvidersInjectableService: ModuleProvidersInjectableService,
    protected rootInjectableService: RootInjectableService
  ){}
}
