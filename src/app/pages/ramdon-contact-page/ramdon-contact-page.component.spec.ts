import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamdonContactPageComponent } from './ramdon-contact-page.component';

describe('RamdonContactPageComponent', () => {
  let component: RamdonContactPageComponent;
  let fixture: ComponentFixture<RamdonContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamdonContactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamdonContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
