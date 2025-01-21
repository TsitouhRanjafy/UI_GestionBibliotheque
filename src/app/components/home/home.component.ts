import { lastReadingBooksData } from '../../db/lastreading.db';
import { Component , CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CardProfilComponent } from './card-profil/card-profil.component';
import { HeaderComponent } from "./header/header.component";
import { LastReadingComponent } from "./last-reading/last-reading.component";
import { ListComponent } from "./list/list.component";
import { IBook, IBookSingle, IBookTop } from '../../models/type.model';
import { get, newReleaseBookDb, top } from '../../db/newreleasebook.db';
import { TopComponent } from './top/top.component';
import { GetBookService } from '../../services/book/get-book.service';
import { Observable, Subscription } from 'rxjs';
import { ILivreGet } from '../../models/livre.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent,
    LastReadingComponent,
    ListComponent,
    TopComponent,
    AsyncPipe
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {

  numberAllBook$!: Observable<Object>;
  topBooks$!: Observable<ILivreGet[]>;
  newReleaseBooks$!: Observable<ILivreGet[]>;
  pageIndex: number = 0;
  maxPageIndex: number = 0;

  constructor(private getBookService: GetBookService){}
  
  lastReadingBooks: IBookSingle[] = lastReadingBooksData
  

  lastBorrowBooks: IBook[] = get(0);
  lengthLastBorrow: number = newReleaseBookDb.length

  AllBooks: IBook[] = get(0)
  lengthAllBooks: number = newReleaseBookDb.length

  changePageIndex(value: boolean): void {
    (value)? this.pageIndex++ : this.pageIndex--;
    this.newReleaseBooks$ = this.getBookService.getNewReleaseBook(this.pageIndex);
  }

  ngOnInit(): void {
    this.numberAllBook$ = this.getBookService.getNumberAllBook();
    this.topBooks$ = this.getBookService.getTopBooks();
    this.newReleaseBooks$ = this.getBookService.getNewReleaseBook(0);
  }
}
