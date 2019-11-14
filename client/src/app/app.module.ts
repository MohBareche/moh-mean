import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Local format
import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HeroService } from './hero/hero.service';
import { UserService } from './services/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    DashboardComponent,
    AddTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
  ],
providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy},
  HeroService,
  AuthGuard,
  UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
