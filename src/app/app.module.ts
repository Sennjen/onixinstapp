import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { AppComponent } from './core/app.component';
import { ApiService } from './shared/services/api.service';

import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CoreModule.forRoot(),
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {
}
