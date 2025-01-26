import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agree-check',
  standalone: true,
  imports: [],
  templateUrl: './agree-check.component.html',
})
export class AgreeCheckComponent {

  @Input() acccord: string = 'I agree'
}
