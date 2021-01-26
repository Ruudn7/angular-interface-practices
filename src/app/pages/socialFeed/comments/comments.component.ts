import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../social-component/social/types';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

}
