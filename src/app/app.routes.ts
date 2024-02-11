import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingScheduleComponent } from './create-meeting-schedule/create-meeting-schedule.component';

export const routes: Routes = [
  { path: '', redirectTo: '/create-client', pathMatch: 'full' },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'create-meeting', component: CreateMeetingScheduleComponent },
];
