import { inject } from '@angular/core';
import { CanActivateFn,  CanMatchFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/users/user-auth.service';


export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  try {
    await authService.authentification();
    const isAuthenticated: boolean = authService.authenticated();
    if (isAuthenticated){
      return true;
    } 
  } catch (error) {
    throw error
  }
  return router.parseUrl('/login');     
};


