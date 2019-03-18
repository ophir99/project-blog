import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Tweet{
  text: string,
  date: string
}
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  BASE_URL: string = "http://localhost:9800/post"
  constructor(
    private http: HttpClient
  ) { }


  createTweet = (data:Tweet) => this.http.post(`${this.BASE_URL}/create`, data);

  getAllTweets = () => this.http.get(`${this.BASE_URL}/all`);

  updateTweet = (data:any) => this.http.put(`${this.BASE_URL}/${data.id}`, {tweet: data.tweet});
}
// localhost:9800/post/dhsjdhjs5656565