import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrardatosComponent } from './registrardatos.component';

describe('RegistrardatosComponent', () => {
  let component: RegistrardatosComponent;
  let fixture: ComponentFixture<RegistrardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrardatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
