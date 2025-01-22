import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEmpruntService {

  readonly url = 'http://localhost:4040'

  constructor(private http: HttpClient){}

  
}
