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

  toggleShowPassword: 'text' | 'password' = 'password';

  onButtonCliked(): void {
    console.log('\n firstname:'+this.firstname()+' \n lastname:'+this.lastname()+' \n email:'+this.email()+'\n password:'+this.password());
    
  }

  onShowPassword(): void {
    if (this.toggleShowPassword == 'text') {
      this.toggleShowPassword = 'password'
    } else {
      this.toggleShowPassword = 'text'
    }
  }

}
