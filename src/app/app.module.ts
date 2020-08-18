import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { PlayerComponent } from './player/player.component';
import { RegisterComponent } from './register/register.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HeaderSecondaryComponent,
    PlayerComponent,
    RegisterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAr0HIdLINOcZHIZVKtPI4__a-QjFpIPP8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
