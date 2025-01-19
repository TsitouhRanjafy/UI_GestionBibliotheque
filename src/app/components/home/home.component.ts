import { lastReadingBooksData } from '../../db/lastreading.db';
import { Component , CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { MenuComponent } from '../../component/home/menu/menu.component';
import { CardProfilComponent } from "../../component/home/card-profil/card-profil.component";
import { HeaderComponent } from "../../component/home/header/header.component";
import { LastReadingComponent } from "../../component/home/last-reading/last-reading.component";
import { ListComponent } from "../../component/home/list/list.component";
import { IBook, IBookSingle, IBookTop } from '../../models/type.model';
import { get, newReleaseBookDb, top } from '../../db/newreleasebook.db';
import { TopComponent } from '../../component/home/top/top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent,
    LastReadingComponent,
    ListComponent,
    TopComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  lastReadingBooks: IBookSingle[] = lastReadingBooksData
  
  newReleaseBooks: IBook[] = get(0);
  lengthNewRelease: number = newReleaseBookDb.length

  lastBorrowBooks: IBook[] = get(0);
  lengthLastBorrow: number = newReleaseBookDb.length

  AllBooks: IBook[] = get(0)
  lengthAllBooks: number = newReleaseBookDb.length

  topBook: IBookTop[] = top()
  

  changePagination(pageIndex: number): void {
    this.newReleaseBooks = get(pageIndex);
  }

  changePaginationLS(pageIndex: number): void {
    this.lastBorrowBooks = get(pageIndex)
  }

  changePaginationAll(pageIndex: number): void {
    this.AllBooks = get(pageIndex)
  }

}
