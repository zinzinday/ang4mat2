import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponentComponent} from './main-component/main-component.component';
import {HeaderComponentComponent} from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
