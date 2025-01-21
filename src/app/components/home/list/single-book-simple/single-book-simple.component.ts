import { Component , Input } from '@angular/core';
import { disponible, genre, IBook } from '../../../../models/type.model';
import { ILivreGet } from '../../../../models/livre.model';

@Component({
  selector: 'app-single-book-simple',
  standalone: true,
  imports: [],
  templateUrl: './single-book-simple.component.html',
  styleUrl: './single-book-simple.component.scss'
})
export class SingleBookSimpleComponent {


  @Input({ required: true }) book!: ILivreGet;
  @Input({
    transform: imageNameToImageUrl
  }) imageUrl: string | undefined;

}

function imageNameToImageUrl(value: string): string | undefined {
  return (value=='imageurl')? undefined : 'image/'+value+'.jpeg';
}