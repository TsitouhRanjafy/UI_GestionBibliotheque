import { Component, EventEmitter, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  search = model<string>();
  @Output() searchCliked : EventEmitter<string> = new EventEmitter() 

  searchReload(): void {
    this.searchCliked.emit(this.search());
  }

  testk(): void {
    console.log("testetstets");
    
  }
}
