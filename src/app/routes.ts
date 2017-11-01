import { Routes } from '@angular/router';
import { AddStudentComponent } from './students/containers/add-student.component'
import { NotFoundComponent } from './core/containers/not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {
    path: 'signin',
    loadChildren: './signin/signin.module#SignInModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule'
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'parents',
    loadChildren: './parents/parents.module#ParentsModule'
  },
  {
    path: 'staff',
    loadChildren: './staff/staff.module#StaffModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'class-calendar',
    loadChildren: './class-calendar/class-calendar.module#ClassCalendarModule'
  },
  
  {path: '**', component: NotFoundComponent},
];
