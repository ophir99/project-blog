import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule, MatSnackBar, MatSnackBarModule, MatToolbarModule, MatMenuModule, MatDialogModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TweeteditComponent } from './tweetedit/tweetedit.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormComponent,
    DashboardComponent,
    TweeteditComponent
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
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
  HttpClientModule,
  MatPaginatorModule,
  MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TweeteditComponent]
})
export class AppModule { }
