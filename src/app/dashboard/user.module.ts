import { NgModule } from '@angular/core';
import { UserConComponent } from '../user-con/user-con.component';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from '../settings/settings.component';
import { RouterModule } from '@angular/router';
import { DashboardactivateguardService } from '../dashboardactivateguard.service';
import { TweeteditComponent } from '../tweetedit/tweetedit.component';
import { MatModule } from '../mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [UserConComponent, TweeteditComponent, DashboardComponent, SettingsComponent],
    imports: [
        MatModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                canActivate: [DashboardactivateguardService],
                component: UserConComponent,
                children: [
                  {
                    path: "",
                    component: DashboardComponent
                  },
                  {
                    path: "settings",
                    component: SettingsComponent
                  }
                ]
              }
        ])
    ],
    providers: [DashboardactivateguardService],
  entryComponents: [TweeteditComponent]
})
export class UserModule{
    
}