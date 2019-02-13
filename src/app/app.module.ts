import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { AngularMaterialModule } from './common/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ExpositionModule } from './modules/exposition/exposition.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    ExpositionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
