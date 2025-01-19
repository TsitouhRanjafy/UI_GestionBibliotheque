import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {


  @Input() name: string = 'Email'
  @Input() type: 'email' | 'password' | 'text' = 'email'
  @Input() haveLabel: boolean = true;
}
