import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, input, Input, model, ModelSignal, NgModule, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './input.component.html',
})
export class InputComponent {


  @Input() value: ModelSignal<string> | undefined;
  @Input() name: string = 'Email'
  @Input() type!: 'email' | 'password' | 'text';
  @Input() haveLabel: boolean = true;
  @Output() onShowPassword: EventEmitter<void> = new EventEmitter()

  
  showPasswordCliked(): void {
    this.onShowPassword.emit();
  }

}
