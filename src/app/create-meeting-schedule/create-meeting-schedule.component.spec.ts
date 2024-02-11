import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetingScheduleComponent } from './create-meeting-schedule.component';

describe('CreateMeetingScheduleComponent', () => {
  let component: CreateMeetingScheduleComponent;
  let fixture: ComponentFixture<CreateMeetingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMeetingScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMeetingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
