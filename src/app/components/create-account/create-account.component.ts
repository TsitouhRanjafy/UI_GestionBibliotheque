import { Component, inject, model } from '@angular/core';
import { InputComponent } from './input/input.component';
import { AgreeCheckComponent } from "./agree-check/agree-check.component";
import { ButtonComponent } from "./button/button.component";
import { OrComponent } from "./or/or.component";
import { AlreadyComponent } from "./already/already.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { typeForSignupUser } from '../../models/user.model';
import { UserService } from '../../services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    InputComponent,
    AgreeCheckComponent,
    ButtonComponent,
    OrComponent,
    AlreadyComponent,
    ReactiveFormsModule
],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  firstname = model('');
  lastname = model('');
  email = model('');
  password = model('');
  isCheked = model(false);

  userService = inject(UserService);

  constructor(private router: Router){}

  toggleShowPassword: 'text' | 'password' = 'password';

  async onButtonCliked(): Promise<void> {
     try {
      const signedUser: typeForSignupUser = await this.userService.signup({
        firstname: this.firstname(),
        lastname: this.lastname(),
        email: this.email(),
        password: this.password()
      })
      if (!signedUser.id) return; // il faut annuler le requête ici
      this.router.navigate(['/home']);
     } catch (error) {
      throw error
     }
  }

  onShowPassword(): void {
    if (this.toggleShowPassword == 'text') {
      this.toggleShowPassword = 'password'
    } else {
      this.toggleShowPassword = 'text'
    }
  }

}
