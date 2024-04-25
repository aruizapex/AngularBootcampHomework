import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCComponent } from './pipes-c.component';

describe('PipesCComponent', () => {
  let component: PipesCComponent;
  let fixture: ComponentFixture<PipesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
