import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageguardService } from './landingpageguard.service';
import { DashboardactivateguardService } from './dashboardactivateguard.service';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [LandingpageguardService],
    component: LandingComponent
  },
  {
    path: "dashboard",
    canActivate: [DashboardactivateguardService],
    component: DashboardComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
