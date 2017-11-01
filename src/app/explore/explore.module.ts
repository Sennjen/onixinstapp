import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components';
import { PostViewModule } from '../shared/post-view/post-view.module';
import { ExploreComponent } from './explore.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    PostViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExploreComponent,
      },
    ]),
  ],
  declarations: [
    ExploreComponent
  ],
  providers: []
})
export class ExploreModule {}
