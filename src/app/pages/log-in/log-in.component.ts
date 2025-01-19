import { Component } from '@angular/core';
import { InputComponent } from '../../component/create-account/input/input.component';
import { AgreeCheckComponent } from "../../component/create-account/agree-check/agree-check.component";
import { ButtonComponent } from "../../component/create-account/button/button.component";
import { OrComponent } from "../../component/create-account/or/or.component";
import { AlreadyComponent } from "../../component/create-account/already/already.component";

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
