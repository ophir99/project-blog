import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-one';
  columns_ = ['id', 'name']
  data = [
    {
      id: 1,
      name: "Angular"
    },
    {
      id: 2,
      name: "Vue"
    }
  ];
  posts;

  @ViewChild(MatPaginator)
  paginator;
  @ViewChild(MatSort)
  matSort;
  dataSource = new MatTableDataSource();
  columns1 = ["id", "title", "body"];
  dataSource1 = new MatTableDataSource();
  constructor(
    private http: HttpClient
  ){
    this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe(
        (res: any) => {
          this.posts = res;
          this.dataSource1.data = res;
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.matSort;
          this.dataSource1.filter = "l"
        }
      )
    this.dataSource.data = this.data;
  }
}
