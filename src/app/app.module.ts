import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DataBindingComponent} from "./components/data-binding/data-binding.component";
import {FormsModule} from "@angular/forms";
import { DirectivesComponent } from './components/directives/directives.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsComponent } from './components/forms/forms.component';
import { DirectivesAttributeComponent } from './components/directives-attribute/directives-attribute.component';
import { DirectivesStructuralComponent } from './components/directives-structural/directives-structural.component';
import { DirectivesComponentsComponent } from './components/directives-components/directives-components.component';
import { NgxsComponent } from './components/ngxs/ngxs.component';
import { HttpClientModule } from '@angular/common/http'

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DialogBoxComponent,
    DataBindingComponent,
    DirectivesComponent,
    ServicesComponent,
    FormsComponent,
    DirectivesAttributeComponent,
    DirectivesStructuralComponent,
    DirectivesComponentsComponent,
    NgxsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    true  ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
