import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './ngrx/entity-metadata';
import { EntityStoreModule } from './ngrx/entity-store.module';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://swapi.co/api',
};

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}),
    EntityStoreModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: DefaultDataServiceConfig,
    useValue: defaultDataServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
