import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageguardService } from './landingpageguard.service';
import { DashboardactivateguardService } from './dashboardactivateguard.service';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
