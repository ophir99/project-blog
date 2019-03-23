import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TweeteditComponent } from './tweetedit/tweetedit.component';
import { SettingsComponent } from './settings/settings.component';
import { AppInterceptor } from './app.interceptor';
import { UserConComponent } from './user-con/user-con.component';
import { MatModule } from './mat.module';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormComponent,
    // DashboardComponent,
    // TweeteditComponent,
    // SettingsComponent,
    // UserConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
