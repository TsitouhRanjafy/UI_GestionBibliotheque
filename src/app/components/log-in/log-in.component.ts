import { Component } from '@angular/core';
import { InputComponent } from '../create-account/input/input.component';
import { AgreeCheckComponent } from "../create-account/agree-check/agree-check.component";
import { ButtonComponent } from "../create-account/button/button.component";
import { OrComponent } from "../create-account/or/or.component";
import { AlreadyComponent } from "../create-account/already/already.component";

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
}
