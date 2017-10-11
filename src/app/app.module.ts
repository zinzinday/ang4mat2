import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';

import {
  MatCommonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './header/search/search.component';
import {NavbarComponent} from './header/navbar/navbar.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {SidebarComponent} from './wrapper/sidebar/sidebar.component';
import {ContentComponent} from './wrapper/content/content.component';
import { ContentHeaderComponent } from './wrapper/content/content-header/content-header.component';
import { ContentMainComponent } from './wrapper/content/content-main/content-main.component';
import { ContentFooterComponent } from './wrapper/content/content-footer/content-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NavbarComponent,
    WrapperComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentMainComponent,
    ContentFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
