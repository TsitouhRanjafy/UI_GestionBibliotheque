import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { IBook } from '../../../models/type.model';
import { CommonModule } from '@angular/common';
import { PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


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
  
  @Input({ required: true }) length: number = 0;
  pageSize = 7;
  pageIndex = 0;
  @Output() pageIndexChange: EventEmitter<number> = new EventEmitter();

  hidePageSize = true;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  @Input() title: string = 'title';
  @Input({required : true}) books: IBook[] | undefined;

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.pageIndexChange.emit(this.pageIndex)

  }



}
