import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ILivreGet } from '../../../models/livre.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    SingleBookSimpleComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ListComponent{
  
  @Input() title: string = 'title';
  @Input() books: ILivreGet[] = []

  @Output() changePageIndex: EventEmitter<boolean> = new EventEmitter();
  @Input() pageIndex: number = 0;
  @Input() maxPageIndex: number = 0;
  pageSize = 7;


  prevPage(): void {
    this.changePageIndex.emit(false);
  }

  nextPage(): void {
    this.changePageIndex.emit(true);
  }

}
