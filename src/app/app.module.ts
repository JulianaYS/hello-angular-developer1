import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterDeveloperComponent } from './welcoming/components/register-developer/register-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDeveloperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
