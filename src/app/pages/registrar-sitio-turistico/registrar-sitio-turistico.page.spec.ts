import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarSitioTuristicoPage } from './registrar-sitio-turistico.page';

describe('RegistrarSitioTuristicoPage', () => {
  let component: RegistrarSitioTuristicoPage;
  let fixture: ComponentFixture<RegistrarSitioTuristicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarSitioTuristicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarSitioTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
