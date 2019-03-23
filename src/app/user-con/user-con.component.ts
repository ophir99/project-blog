import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-con',
  templateUrl: './user-con.component.html',
  styleUrls: ['./user-con.component.scss']
})
export class UserConComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem("appToken");
    this.router.navigateByUrl("/");

  }

}
