import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-tweetedit',
  templateUrl: './tweetedit.component.html',
  styleUrls: ['./tweetedit.component.scss']
})
export class TweeteditComponent implements OnInit {
  tweet: string;
  
  @Output()
  editTweet = new EventEmitter();
  constructor(
   @Inject(MAT_DIALOG_DATA) private data: any,
   private daialogRef: MatDialogRef<TweeteditComponent>
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.tweet = this.data.tweet.text;
  }


  triggerEditEvent(){
    this.editTweet.emit({tweet: this.tweet, id: this.data.tweet._id});
    this.daialogRef.close();
  }

}
