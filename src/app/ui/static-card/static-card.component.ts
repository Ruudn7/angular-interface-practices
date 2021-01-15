import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.scss']
})
export class StaticCardComponent implements OnInit {

  @Input() text = '';

  constructor(
    @Attribute('type') public type: string
  ) { }

  ngOnInit(): void {
  }

}
