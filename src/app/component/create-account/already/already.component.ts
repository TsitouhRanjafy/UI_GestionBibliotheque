import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-already',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './already.component.html',
  styleUrl: './already.component.scss'
})
export class AlreadyComponent {

  @Input({required:true}) question: string = '';
  @Input({required: true}) solution: string = ''
  @Input() router: string | undefined;
}
