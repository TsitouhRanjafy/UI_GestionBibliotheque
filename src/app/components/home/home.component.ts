import { lastReadingBooksData } from '../../db/lastreading.db';
import { Component , computed, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, model, OnInit, Output, signal, Signal, WritableSignal } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CardProfilComponent } from './card-profil/card-profil.component';
import { HeaderComponent } from "./header/header.component";
import { LastReadingComponent } from "./last-reading/last-reading.component";
import { ListComponent } from "./list/list.component";
import { IBookSingle, IBooleanAndStringObject } from '../../models/type.model';
import { TopComponent } from './top/top.component';
import { GetBookService } from '../../services/book/get-book.service';
import { Observable } from 'rxjs';
import { ILivreGet } from '../../models/livre.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { titleOfList } from '../../models/type.model';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/users/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent,
    ListComponent,
    TopComponent,
    AsyncPipe,
    NgClass,
    CommonModule,
    LastReadingComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {

  numberAllBook$!: Observable<Object>;
  titleOfist = titleOfList
  
  lastLoanBooksByUser: Signal<ILivreGet[] | undefined> = computed(() => this.getBookService.lastBooksYouBorrow()) 

  topBooks$!: Observable<ILivreGet[]>;

  // pour le new release
  newReleaseBooks$!: Observable<ILivreGet[]>;
  pageIndexNewRelease: number = 0;
  maxPageIndex: number = 0;

  // pour le last loan book
  lastBorrowBooks$!: Observable<ILivreGet[]>;
  pageIndexLastBorrow: number = 0;

  // pour le all book
  allBooksByPageIndex$!: Observable<ILivreGet[]>;
  pageIndexAllBook: number = 0;

  userSerivec = inject(UserService);
  

  // pour le recherche
  search = model('');
  // tout nos Livre dans BD
  allBooks?: ILivreGet[];
  // resultat de recherche quand le search change
  searchResultBySearchChange = computed(() =>   this.allBooks?.filter((book) => book.titre.includes(this.search()) ));
  // resultat de recherche quand button search cliked 
  searchResultByClikedButton = signal<ILivreGet[]>([]) ;
  // ecoute le resultat du recherche quand le button search est clické
  searchResultBySearchResultByClkedButton = computed(() => this.searchResultByClikedButton()) 

  constructor(private getBookService: GetBookService){}
  
  // qui gérer le changement de pagination de tout (new Release,all Book,Loan Last)
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
          this.allBooksByPageIndex$ = this.getBookService.getNewReleaseBook(this.pageIndexAllBook);
        }  else if (this.pageIndexAllBook > 0) {
          this.pageIndexAllBook--
          this.allBooksByPageIndex$ = this.getBookService.getNewReleaseBook(this.pageIndexAllBook);
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
    this.allBooksByPageIndex$ = this.getBookService.getAllBooksByPageIndex(this.pageIndexAllBook);
    this.getBookService.getAllBooks().subscribe({
      next: (data: ILivreGet[]) => {
        this.allBooks = data;
      }
    })
    this.getBookService.getLastBookBorrowByUserId();
  }

  searchBooksByButtonCliked(value: string): void{
    const result = this.allBooks?.filter((book) => book.titre.includes(value))
    if (result) this.searchResultByClikedButton.set(result);
  }

  onLogout(): void {
    console.log(' clear cookies');
    
    this.userSerivec.logout();
  }

}
