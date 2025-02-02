import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { 
        path: '' ,
        pathMatch: 'prefix',
        redirectTo: 'home/1' ,
    },
    { 
        path:'login',
        component: LogInComponent
    },
    { 
        path: 'signup',
        component: CreateAccountComponent
    },
    { 
        path:'home/:id',
        loadComponent: () => HomeComponent,
        canActivate: [authGuard] 
    },
];
