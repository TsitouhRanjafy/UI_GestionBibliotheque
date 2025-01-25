import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ILivreGet } from '../../../models/livre.model';
import { IBooleanAndStringObject, titleOfList } from '../../../models/type.model';


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
  
  @Input() title: titleOfList = titleOfList.undefined;
  @Input() books: ILivreGet[] | undefined = []

  @Input() maxPageIndex: number = 0;
  @Input() pageIndex: number = 0;
  pageSize = 7;
  @Output() changePageIndex: EventEmitter<IBooleanAndStringObject> = new EventEmitter();
  @Input() pagination: boolean = true;


  prevPage(): void {
    this.changePageIndex.emit({isNext: false,title: this.title});
  }

  nextPage(): void {
    this.changePageIndex.emit({isNext: true,title: this.title});
  }

}
