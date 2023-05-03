import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomuserDetailsComponent } from './randomuser-details.component';

describe('RandomuserDetailsComponent', () => {
  let component: RandomuserDetailsComponent;
  let fixture: ComponentFixture<RandomuserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomuserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
