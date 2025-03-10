import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBookTop } from '../../../models/type.model';
import { ILivreGet } from '../../../models/livre.model';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {


  @Input() topBooks: ILivreGet[] = [] 
}
