import { StaticCardComponent } from './ui/static-card/static-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-interface-practices';
  message = '';
  open = false;

  focus(elem: StaticCardComponent): void {
    elem.show();
  }
}
