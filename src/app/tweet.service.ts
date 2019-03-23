import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface Tweet{
  _id?: string,
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


  createTweet = (data:Tweet) => 
  this.http.post(`${this.BASE_URL}/create`, data);

  getAllTweets = () => 
  this.http.get(`${this.BASE_URL}/all`);

  updateTweet = (data:any) => this.http.put(`${this.BASE_URL}/${data.id}`, {tweet: data.tweet});

  deleteTweet = (id:string) => this.http.delete(`${this.BASE_URL}/${id}`);
}
// localhost:9800/post/dhsjdhjs5656565