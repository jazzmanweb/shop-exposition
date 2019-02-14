import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { AngularMaterialModule } from './common/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ExpositionModule } from './modules/exposition/exposition.module';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, MenuComponent],
    imports: [
        BrowserModule,
        AngularMaterialModule,
        ExpositionModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
