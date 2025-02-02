import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { AuthService } from './services/users/user-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.authService.authentification();
  }
  title = 'gestion-bibliotheque';

  private authService = inject(AuthService);



}
