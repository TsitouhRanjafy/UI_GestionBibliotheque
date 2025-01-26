import { Component, Input, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agree-check',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './agree-check.component.html',
})
export class AgreeCheckComponent {

  @Input() acccord: string = 'I agree'
  @Input() isCheked!: ModelSignal<boolean>;
}
