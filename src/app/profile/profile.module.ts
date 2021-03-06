import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module'
import { PostViewModule } from '../shared/post-view/post-view.module';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    PostViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
    ]),
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class ProfileModule {}
