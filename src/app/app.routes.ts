import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LogInComponent } from './pages/log-in/log-in.component';


export const routes: Routes = [
    { pathMatch: 'prefix',redirectTo: 'login',path: '' },
    { path:'login',component: LogInComponent},
    { path: 'signup',component: CreateAccountComponent},
    { path:'home',component: HomeComponent },
];
