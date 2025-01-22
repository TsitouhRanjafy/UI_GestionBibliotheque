import { lastReadingBooksData } from '../../db/lastreading.db';
import { Component , CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CardProfilComponent } from './card-profil/card-profil.component';
import { HeaderComponent } from "./header/header.component";
import { LastReadingComponent } from "./last-reading/last-reading.component";
import { ListComponent } from "./list/list.component";
import { IBook, IBookSingle, IBookTop, IBooleanAndStringObject } from '../../models/type.model';
import { get, newReleaseBookDb, top } from '../../db/newreleasebook.db';
import { TopComponent } from './top/top.component';
import { GetBookService } from '../../services/book/get-book.service';
import { Observable, Subscription } from 'rxjs';
import { ILivreGet } from '../../models/livre.model';
import { AsyncPipe } from '@angular/common';
import { titleOfList } from '../../models/type.model';

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
    AsyncPipe,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {

  numberAllBook$!: Observable<Object>;
  titleOfist = titleOfList

  topBooks$!: Observable<ILivreGet[]>;

  newReleaseBooks$!: Observable<ILivreGet[]>;
  pageIndexNewRelease: number = 0;
  maxPageIndex: number = 0;

  lastBorrowBooks$!: Observable<ILivreGet[]>;
  pageIndexLastBorrow: number = 0;

  allBook$!: Observable<ILivreGet[]>;
  pageIndexAllBook: number = 0;

  lastReadingBooks: IBookSingle[] = lastReadingBooksData

  constructor(private getBookService: GetBookService){}
  
  changePageIndex(value: IBooleanAndStringObject): void {
    switch (value.title) {
      case titleOfList.NewRelease:
        if (value.isNext){
          this.pageIndexNewRelease++
          this.newReleaseBooks$ = this.getBookService.getNewReleaseBook(this.pageIndexNewRelease);
        }  else if (this.pageIndexNewRelease > 0) {
          this.pageIndexNewRelease--
          this.newReleaseBooks$ = this.getBookService.getNewReleaseBook(this.pageIndexNewRelease);
        }
        break;
      case titleOfList.LastBorrow:
        if (value.isNext){
          this.pageIndexLastBorrow++
          this.lastBorrowBooks$ = this.getBookService.getNewReleaseBook(this.pageIndexLastBorrow);
        }  else if (this.pageIndexLastBorrow > 0) {
          this.pageIndexLastBorrow--
          this.lastBorrowBooks$ = this.getBookService.getNewReleaseBook(this.pageIndexLastBorrow);
        }
        break;
      case titleOfList.AllBook:
        if (value.isNext){
          this.pageIndexAllBook++
          this.allBook$ = this.getBookService.getNewReleaseBook(this.pageIndexAllBook);
        }  else if (this.pageIndexAllBook > 0) {
          this.pageIndexAllBook--
          this.allBook$ = this.getBookService.getNewReleaseBook(this.pageIndexAllBook);
        }
        break;
    
      default:
        break;
    }

  }

  ngOnInit(): void {
    this.numberAllBook$ = this.getBookService.getNumberAllBook();
    this.topBooks$ = this.getBookService.getTopBooks();
    this.newReleaseBooks$ = this.getBookService.getNewReleaseBook(this.pageIndexNewRelease);
    this.lastBorrowBooks$ = this.getBookService.getLastBorrowBook();
    this.allBook$ = this.getBookService.getAllBook(this.pageIndexAllBook);
  }
}
