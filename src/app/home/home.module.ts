import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './containers/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    NgbModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: []
})
export class DashboardModule {
}
