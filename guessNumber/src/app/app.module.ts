import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './menu/header/header.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { ContentComponent } from './content/content.component';
import { GuessNumberComponent } from './guess-number/guess-number.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'log-out', component: LogoutComponent },
  { path: 'guess-number', component: GuessNumberComponent },
  { path: '**', redirectTo:'/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    GuessNumberComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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
