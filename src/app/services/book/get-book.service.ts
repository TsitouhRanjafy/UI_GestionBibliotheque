import { inject, Injectable, OnInit, signal, WritableSignal } from '@angular/core';
import { ILivreGet } from '../../models/livre.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBookService  {

  readonly url = 'http://localhost:4040'

  constructor(private http: HttpClient){}

  getNumberAllBook(): Observable<number> {
    return this.http.get<number>(this.url+'/');
  }

  getTopBooks(): Observable<ILivreGet[]> {
    return this.http.get<ILivreGet[]>(this.url+'/topbooks/3');
  }

  getNewReleaseBook(pageIndex: number): Observable<ILivreGet[]>{
    return this.http.get<ILivreGet[]>(this.url+`/books/${pageIndex*7}/${(pageIndex+1)*7}/3`);
  }



} 
