import { Component, Input } from '@angular/core';

import { Post } from '../../social-component/social/types';

@Component({
  selector: 'app-media-post',
  templateUrl: './media-post.component.html',
  styleUrls: ['./media-post.component.scss']
})
export class MediaPostComponent {

  @Input() post: Post | undefined;


}
