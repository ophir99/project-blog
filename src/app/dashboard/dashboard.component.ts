import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService, Tweet } from '../tweet.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TweeteditComponent } from '../tweetedit/tweetedit.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tweets: Tweet[] = [];
  dialogRef:MatDialogRef<TweeteditComponent>;
  placeholder: string = 'Post something here';
  constructor(
    private router: Router,
    private tweet: TweetService,
    private dialog: MatDialog,
    // private dialogRef: MatDialogRef<TweeteditComponent>
  ) { 
    
  }


  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweet.getAllTweets()
      .subscribe(
        (res: any) => {
          console.log(res);
          // this.tweets.push(res.result);
          this.tweets = [...this.tweets, ...res.result];
        }
      )
  }

  logout() {
    sessionStorage.removeItem("appToken");
    this.router.navigateByUrl("/")

  }

  setPlaceholder(post) {
    if (!post.value) {
      this.placeholder = "Post something here";
    }
  }


  create(text: string) {
    const data: Tweet = {
      text,
      date: (new Date()).toDateString()
    }
    this.tweet.createTweet(data)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.tweets.push(res.result);
        }
      )
  }

  openEditDialog(tweet) {
   this.dialogRef = this.dialog.open(TweeteditComponent, {
      data: {
        tweet
      }
    });
    // console.log(this.dialogRef);
    this.dialogRef.componentInstance.editTweet.subscribe(
      (data)=>{
        console.log("Data from Child=>", data);
        this.tweet.updateTweet({id: data.id, tweet: data.tweet}).subscribe(
          res => {
            console.log("Res", res);
          }
        )
      }
    )
  }
}
