import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { typeForLogedUser, typeForLogin, typeForSignup, typeForSignupUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticated: WritableSignal<boolean> = signal(false);
  public authenticated: Signal<boolean> = computed(() => this.isAuthenticated());
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
        body: JSON.stringify(data),
        credentials: 'include'
      })
      if (responose.ok) {
        this.isAuthenticated.set(true);
        logedUser = await responose.json();
        return logedUser;   
      }
      return logedUser;
    } catch (error) {
      throw error
    }
  }

  async logout() {
    //Supprime le cookie en lui passant une date d'expiration passée
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
    this.isAuthenticated.set(false);
  }

  async authentification(): Promise<void> {
    try {
      const response = await fetch(`${this.url}/welcome`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      });
      if (response.ok) {
        this.isAuthenticated.set(true);
        console.log('  authentified');
        return;
      }
      this.isAuthenticated.set(false);
      return;
    } catch (error) {
      throw error
    }
  }

  async signup(data: typeForSignup): Promise<typeForSignupUser>{
    let signupData: typeForSignupUser = {
      status: '',
      message: '',
      id: ''
    }
    try {
      const response = await fetch(`${this.url}/signup`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }) 
      if (response.ok) {
        this.isAuthenticated.set(true);
        signupData = await response.json();
      }
      return signupData;
    } catch (error) {
      throw error
    }
  } 
}
