import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingpageguardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(){
    const token = sessionStorage.getItem("appToken");
    if(token){
      this.router.navigate(["dashboard"]);
      // return of(false);
    }
    return of(true);
  }
}
