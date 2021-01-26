import { Component, Input } from '@angular/core';

import { Post } from '../social-component/social/types';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() post!: Post;

}
