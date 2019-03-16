import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService, Tweet } from '../tweet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  tweets: Tweet[] = [];
  placeholder:string = 'Post something here';
  constructor(
    private router: Router,
    private tweet: TweetService
  ) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(){
    this.tweet.getAllTweets()
        .subscribe(
          (res:any) => {
            console.log(res);
            // this.tweets.push(res.result);
            this.tweets = [...this.tweets, ...res.result];
          }
        )
  }

  logout(){
    sessionStorage.removeItem("appToken");
    this.router.navigateByUrl("/")

  }

  setPlaceholder(post){
    if(!post.value){
      this.placeholder = "Post something here";
    }
  }


  create(text: string){
    const data: Tweet = {
      text,
      date: (new Date()).toDateString()
    }
    this.tweet.createTweet(data)
        .subscribe(
          (res:any) => {
            console.log(res);
            this.tweets.push(res.result);
          }
        )
  }
}
