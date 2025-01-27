import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

export const authGuard: CanActivateFn = async (route, state) => {

  const router = inject(Router);
  try {
    const userService = inject(UserService)
    await userService.authentification();
    const isAuthenticated: boolean = userService.authenticated();
    if (isAuthenticated){
      return true;
    } 
  } catch (error) {
    throw error
  }
  return router.parseUrl('/login');     
};
