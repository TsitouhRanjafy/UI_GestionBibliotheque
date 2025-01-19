import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agree-check',
  standalone: true,
  imports: [],
  templateUrl: './agree-check.component.html',
  styleUrl: './agree-check.component.scss'
})
export class AgreeCheckComponent {

  @Input() acccord: string = 'I agree'
}
