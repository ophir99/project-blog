import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

   intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log(req);
        let newReq;
        if(req.url.includes("post")){
             newReq = req.clone({
                headers: new HttpHeaders().append("Authentication", `bearer_ ${sessionStorage.getItem("appToken")}`)
            });
        }else{
            newReq = req.clone();
        }
       return next.handle(newReq);
   }
}