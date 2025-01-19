import { Component, Input } from '@angular/core';
import { genre, IBookSingle } from '../../../../models/type.model';

@Component({
  selector: 'app-single-book-details',
  standalone: true,
  imports: [],
  templateUrl: './single-book-details.component.html',
  styleUrl: './single-book-details.component.scss'
})
export class SingleBookDetailsComponent {

  @Input() title: string = 'Title Harry potter book';
  @Input() genre: genre = genre.Fantastic
  @Input() dateRetoure: Date = new Date

}
