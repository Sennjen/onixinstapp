import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './containers/app.component';
import { NotFoundComponent } from './containers/not-found.component';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { AddStudentComponent } from '../students/containers/add-student.component';

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent,
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  AddStudentComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
