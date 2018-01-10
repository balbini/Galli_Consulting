import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OfferedServicesComponent } from './components/offered-services/offered-services.component';
import { ContactComponent } from './components/contact/contact.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Overlay, ScrollStrategyOptions, ScrollDispatcher } from '@angular/cdk/overlay';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'services-offered', component: OfferedServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TestimonialsComponent,
    OfferedServicesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    MatDialogModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, MatDialog, Overlay, ScrollStrategyOptions, ScrollDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
