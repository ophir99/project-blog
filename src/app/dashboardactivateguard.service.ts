import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardactivateguardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(){
    if(sessionStorage.getItem("appToken")){
      return of(true)
    }
    this.router.navigateByUrl("/")
    return of(false)
  }
}
