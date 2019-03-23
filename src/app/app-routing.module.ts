import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageguardService } from './landingpageguard.service';
import { DashboardactivateguardService } from './dashboardactivateguard.service';
import { SettingsComponent } from './settings/settings.component';
import { UserConComponent } from './user-con/user-con.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [LandingpageguardService],
    component: LandingComponent
  },
  {
    path: "dashboard",
    loadChildren: "./dashboard/user.module#UserModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
