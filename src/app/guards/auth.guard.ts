import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  // const isAuthenticated = inject(UserService).isAAuthenticated

  // if (isAuthenticated()) 
  return true;
  // return router.parseUrl('/login');     
};
