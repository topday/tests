import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './menu/header/header.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
