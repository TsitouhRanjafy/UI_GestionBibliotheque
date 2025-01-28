import { Component, inject, model } from '@angular/core';
import { InputComponent } from '../create-account/input/input.component';
import { AgreeCheckComponent } from "../create-account/agree-check/agree-check.component";
import { ButtonComponent } from "../create-account/button/button.component";
import { OrComponent } from "../create-account/or/or.component";
import { AlreadyComponent } from "../create-account/already/already.component";
import { AuthService } from '../../services/users/user-auth.service';
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

  userService = inject(AuthService);

  constructor(private router: Router){}

  onShowPassword(): void {
    if (this.toggleShowPassword == 'text') {
      this.toggleShowPassword = 'password'
    } else {
      this.toggleShowPassword = 'text'
    }
  }

  async onSubmit(): Promise<void> {
    try {
      const logedUser: typeForLogedUser = await this.userService.login({ 
        email: this.email(),
        password: this.password()
      });
      if (!logedUser.id || !logedUser.token) {
        // Il faut annuler le requet si c'est un Observable
        return;
      }
      this.router.navigate(['/home', logedUser.id ]);
    } catch (error) {
      throw error
    }
  }
}
