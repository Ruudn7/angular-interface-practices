import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../social-component/social/types';

@Component({
  selector: 'app-media-post',
  templateUrl: './media-post.component.html',
  styleUrls: ['./media-post.component.scss']
})
export class MediaPostComponent implements OnInit {

  @Input() post: Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
