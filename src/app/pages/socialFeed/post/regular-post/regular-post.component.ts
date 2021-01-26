import { Component, Input } from '@angular/core';

import { Post } from '../../social-component/social/types';

@Component({
  selector: 'app-regular-post',
  templateUrl: './regular-post.component.html',
  styleUrls: ['./regular-post.component.scss']
})
export class RegularPostComponent {

  @Input() post: Post | undefined;

}
