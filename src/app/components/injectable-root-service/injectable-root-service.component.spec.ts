import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableRootServiceComponent } from './injectable-root-service.component';

describe('InjectableRootServiceComponent', () => {
  let component: InjectableRootServiceComponent;
  let fixture: ComponentFixture<InjectableRootServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectableRootServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjectableRootServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
