import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginfarmaceuticoPage } from './loginfarmaceutico.page';

describe('LoginfarmaceuticoPage', () => {
  let component: LoginfarmaceuticoPage;
  let fixture: ComponentFixture<LoginfarmaceuticoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfarmaceuticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginfarmaceuticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
