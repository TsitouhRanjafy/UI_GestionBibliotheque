import { Injectable} from '@angular/core';
import { ILivreGet } from '../../models/livre.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBookService  {

  readonly url = 'http://localhost:4040'

  constructor(private http: HttpClient){}

  getNumberAllBook(): Observable<Object> {
    return this.http.get<Object>(this.url + '/')
  }

  getTopBooks(): Observable<ILivreGet[]> {
    return this.http.get<ILivreGet[]>(this.url+'/topbooks/3');
  }

  getNewReleaseBook(pageIndex: number): Observable<ILivreGet[]>{
    return this.http.get<ILivreGet[]>(this.url+`/books/${pageIndex*7}/${7}/4`);
  }



} 
