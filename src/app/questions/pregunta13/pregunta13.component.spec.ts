import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta13Component } from './pregunta13.component';

describe('Pregunta13Component', () => {
  let component: Pregunta13Component;
  let fixture: ComponentFixture<Pregunta13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
