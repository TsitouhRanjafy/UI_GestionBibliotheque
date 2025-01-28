import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: WritableSignal<User> = signal({
    id: '',
    firstname: '',
    lastname: '',
    email: ''
  }) 
  private readonly url = 'http://localhost:4040';
  constructor(private http: HttpClient) { }


  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`)
  }

}
