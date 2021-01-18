import { CardCloseComponent } from './../card-close/card-close.component';
import { Component, Input, ViewChild, AfterViewChecked, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { flatMap, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.scss']
})
export class StaticCardComponent implements AfterViewInit, OnDestroy {

  @Input() open = false;
  @Input() text = '';
  @Input() type = '';

  @ViewChildren(CardCloseComponent) closeRefs = new QueryList<CardCloseComponent>();

  subscription = new Subscription();

  ngAfterViewInit(): void {
    this.subscription = this.closeRefs.changes.pipe(
      mergeMap( (changes: QueryList<CardCloseComponent>) => changes.toArray()s),
      switchMap( button => button.onClose )
    ).subscribe(
      () => {
        this.close();
      }
    );
  }

  ngOnDestroy(): void{
    this.subscription && this.subscription.unsubscribe();
  }

  constructor() { }

  close(): void {
    this.open = false;
  }

  show(): void {
    this.open = true;
  }

}
