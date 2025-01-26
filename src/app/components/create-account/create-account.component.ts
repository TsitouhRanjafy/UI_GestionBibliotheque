import { Component, model } from '@angular/core';
import { InputComponent } from './input/input.component';
import { AgreeCheckComponent } from "./agree-check/agree-check.component";
import { ButtonComponent } from "./button/button.component";
import { OrComponent } from "./or/or.component";
import { AlreadyComponent } from "./already/already.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  toggleShowPassword: 'text' | 'password' = 'password';

  onButtonCliked(): void {
    // Sign up 
    // Redirect 
    
  }

  onShowPassword(): void {
    if (this.toggleShowPassword == 'text') {
      this.toggleShowPassword = 'password'
    } else {
      this.toggleShowPassword = 'text'
    }
  }

}
