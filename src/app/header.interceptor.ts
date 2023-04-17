import { Injectable } from '@angular/core';
import {  HttpHeaders  } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '00a22af51bmsh3d6ce6b623b57b1p174fcejsnc8c058b0457b',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    });

  const modifiedReq = req.clone({ headers });

  return next.handle(modifiedReq);  }
}
