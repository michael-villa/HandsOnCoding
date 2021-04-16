import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CreacionalComponent } from './creacional/creacional.component';
import { ComportamentalComponent } from './comportamental/comportamental.component';
import { HomeComponent } from './home/home.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreacionalComponent,
    ComportamentalComponent,
    EstructuralComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
