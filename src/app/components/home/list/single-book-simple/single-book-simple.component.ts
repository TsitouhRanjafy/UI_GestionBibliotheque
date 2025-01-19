import { Component , Input } from '@angular/core';
import { disponible, genre, IBook } from '../../../../models/type.model';

@Component({
  selector: 'app-single-book-simple',
  standalone: true,
  imports: [],
  templateUrl: './single-book-simple.component.html',
  styleUrl: './single-book-simple.component.scss'
})
export class SingleBookSimpleComponent {


  @Input() book: IBook = {
    title: 'Escarboucle Bleue',
    author: 'Arthur',
    genre: genre.Adventure,
    sortie: new Date(2024,1,1),
    disponible: disponible.OUI
  }
}
