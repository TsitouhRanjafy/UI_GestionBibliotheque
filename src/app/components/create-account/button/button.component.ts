import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  @Input() iconPath: string = ''
  @Input() title: string = ''
  @Input() background: 'bg-whitepropre' | 'bg-bluehover' | 'bg-blue' = 'bg-blue'
  @Input() backgroundactive: string = 'active:bg-blueactive'
  @Input() textcolor: 'text-primary' | 'text-whitepropre' = 'text-whitepropre'
  @Input() type: string = 'button';
  @Output() onButtonCliked: EventEmitter<void> = new EventEmitter();

  buttonClicked(): void{
    this.onButtonCliked.emit();
  }
}
