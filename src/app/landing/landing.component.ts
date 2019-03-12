import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  heading:string;
  constructor() { }

  ngOnInit() {
  }

  getHeading(e:string){
    this.heading = e;
  }

}
