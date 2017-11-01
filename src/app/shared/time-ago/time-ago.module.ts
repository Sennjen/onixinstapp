import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateParsePipe } from './date-parse.pipe';
import { TimeAgoComponent } from './time-ago.component'

export const COMPONENTS = [
  DateParsePipe,
  TimeAgoComponent
];

@NgModule({
  imports:[CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class TimeAgoModule {
}
