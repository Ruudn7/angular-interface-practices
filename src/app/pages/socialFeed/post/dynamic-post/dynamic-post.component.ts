import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { Post } from '../../social-component/social/types';
import { MediaPostComponent } from './../media-post/media-post.component';
import { RegularPostComponent } from './../regular-post/regular-post.component';

@Component({
  selector: 'app-dynamic-post',
  templateUrl: './dynamic-post.component.html',
  styleUrls: ['./dynamic-post.component.scss']
})
export class DynamicPostComponent implements AfterViewInit {

  @Input() post!: Post;

  @ViewChild('containerRef', {read: ViewContainerRef}) containerRef!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef
  ) { }

  types: any = {
    regular: RegularPostComponent,
    media: MediaPostComponent
  };

  ngAfterViewInit(): void {
    const Type = this.types[ this.post.type ];
    const factory: ComponentFactory<RegularPostComponent | MediaPostComponent> = this.resolver.resolveComponentFactory(Type);
    const component = factory.create(this.viewContainer.injector);
    component.instance.post = this.post;
    // this.viewContainer.insert(component.hostView);  <-- tutaj zastępuje temaplte, ponizej podmienia teamplate w ng container
    setTimeout(() => {
      this.containerRef.insert(component.hostView);
    }, 0);
  }

}
