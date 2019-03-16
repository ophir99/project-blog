import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule, MatSnackBar, MatSnackBarModule, MatToolbarModule, MatMenuModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
  HttpClientModule,
  MatPaginatorModule,
  MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
