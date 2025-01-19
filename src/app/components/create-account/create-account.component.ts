import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { AgreeCheckComponent } from "./agree-check/agree-check.component";
import { ButtonComponent } from "./button/button.component";
import { OrComponent } from "./or/or.component";
import { AlreadyComponent } from "./already/already.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    InputComponent,
    AgreeCheckComponent,
    ButtonComponent,
    OrComponent,
    AlreadyComponent
],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

}
