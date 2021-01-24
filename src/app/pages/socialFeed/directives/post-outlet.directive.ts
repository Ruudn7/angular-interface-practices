import { PostTplDirective } from './post-tpl.directive';
import { Post } from './../social-component/social/types';
import { Directive, Input, QueryList, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appPostOutlet]'
})
export class PostOutletDirective {

  @Input('appPostOutlet')
  post!: Post;

  @Input('appPostOutletTypes')
  set types(types: PostTplDirective[]) {
    if (!types || !types.length) {
      return;
    }

    this.postTpls = types;
    const postTpl = types.find(tpl => tpl.type === this.post.type);

    this.container.createEmbeddedView((postTpl as PostTplDirective).template , {
      $implicit: this.post,
      post: this.post
    } );

  }

  postTpls: PostTplDirective[] = [];

  constructor(
    private container: ViewContainerRef
  ) {}

}
