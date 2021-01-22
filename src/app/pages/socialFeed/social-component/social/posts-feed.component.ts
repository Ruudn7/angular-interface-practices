import { Component, OnInit } from '@angular/core';
import { Post } from './types';

@Component({
  selector: 'app-posts-feed',
  templateUrl: './templates/posts-feed.component.html',
  styles: []
})
export class PostsFeedComponent implements OnInit {

  posts: Post[] = [
    {
      id: 1,
      content: 'Some example text update. ',
      author: {
        name: 'Matt Exampler',
        avatar: 'assets/avatars/mateusz.jpg'
      }
    },
    {
      id: 2,
      content: 'Some example text update.',
      media: {
        image: 'assets/images/logoedu.png'
      },
      author: {
        name: 'Greg Tester',
        avatar: 'assets/avatars/grzegorz.jpg'
      }
    },
    {
      id: 3,
      content: 'Some example text update.',
      author: {
        name: 'Peter Sampler',
        avatar: 'assets/avatars/piotr.png'
      }
    }
  ];

  results: Post[] = [];

  filter(query: any): any{
    this.results = this.posts.filter( post => {
      return !query || (post.content.includes(query) || post.author.name.includes(query));
    });
  }

  getResults(): Post[] {
    return this.results;
  }

  constructor() { }

  ngOnInit(): void {
    this.filter('');
  }

}
