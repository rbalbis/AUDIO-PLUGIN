import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationComponentComponent } from './authentification-component.component';

describe('AuthentificationComponentComponent', () => {
  let component: AuthentificationComponentComponent;
  let fixture: ComponentFixture<AuthentificationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
