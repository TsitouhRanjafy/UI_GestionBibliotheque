import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { typeForLogedUser, typeForLogin } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  private isAuthenticated = false;
  private readonly url = 'http://localhost:4040';

  // login user with email and password
  async login(data: typeForLogin): Promise<typeForLogedUser> {
    let logedUser: typeForLogedUser = {
      status: '',
      id: '',
      token: ''
    }
    try {
      const responose = await fetch(`${this.url}/sign/in`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (responose.ok) {
        logedUser = await responose.json();
        return logedUser;   
      }
      return logedUser;
    } catch (error) {
      console.log(' SERVEUR ERROR')
      throw error
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  hello(){
    console.log('test');
    
  }
}
