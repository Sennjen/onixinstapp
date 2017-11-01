import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { StudentsGridComponent } from './students-grid.component';
import { StudentSideComponent } from './student-side.component';
import { StudentsFilterComponent } from './students-filter.component'

export const COMPONENTS = [
  StudentsGridComponent,
  StudentSideComponent,
  StudentsFilterComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    MultiselectDropdownModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {
}
