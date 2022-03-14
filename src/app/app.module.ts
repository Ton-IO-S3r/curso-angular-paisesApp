import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
