import { Component, inject, model } from '@angular/core';
import { InputComponent } from '../create-account/input/input.component';
import { AgreeCheckComponent } from "../create-account/agree-check/agree-check.component";
import { ButtonComponent } from "../create-account/button/button.component";
import { OrComponent } from "../create-account/or/or.component";
import { AlreadyComponent } from "../create-account/already/already.component";
import { UserService } from '../../services/users/user.service';
import { typeForLogedUser } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    InputComponent,
    AgreeCheckComponent,
    ButtonComponent,
    OrComponent,
    AlreadyComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  haveLabelInput: boolean = false;
  toggleShowPassword: 'text' | 'password' = 'password';
  isCheked = model(false);
  email = model('');
  password = model('');

  userService = inject(UserService);

  constructor(private router: Router){}

  onShowPassword(): void {
    if (this.toggleShowPassword == 'text') {
      this.toggleShowPassword = 'password'
    } else {
      this.toggleShowPassword = 'text'
    }
  }

  async onSubmit(): Promise<void> {
    const logedUser: typeForLogedUser = await this.userService.login({ 
      email: this.email(),
      password: this.password()
    });
    if (!logedUser.id || !logedUser.token) {
      // Annuler le requet 
      console.log('log failed');
      
      return;
    }

    this.router.navigate(['/home']);
  }
}
