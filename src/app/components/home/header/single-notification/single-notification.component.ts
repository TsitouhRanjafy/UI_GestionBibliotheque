import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-notification',
  standalone: true,
  imports: [],
  templateUrl: './single-notification.component.html',
})
export class SingleNotificationComponent {

  @Input() title: string | undefined;
  @Input() author:string = '';
  @Input() date: string = ''

}
