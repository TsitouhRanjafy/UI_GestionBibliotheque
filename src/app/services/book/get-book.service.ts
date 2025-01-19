import { inject, Injectable, OnInit, signal, WritableSignal } from '@angular/core';
import { ILivreGet } from '../../models/livre.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBookService  {

  readonly url = 'http://localhost:4000'

  constructor(private http: HttpClient){}

  getTopBooks(): Observable<ILivreGet[]> {
    return this.http.get<ILivreGet[]>(this.url+'/topbooks/3');
  }

} 
