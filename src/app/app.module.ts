import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CrudService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
