import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-feed',
  template: `
    <h4>Social Feed</h4>
    <div class='col-8 mx-auto'>
      <app-posts-filter (queryChange)='filter($event)'></app-posts-filter>

      <div class='card-deck flex-column'>
        <div class='card mb-4' *ngFor='let post of results'>
          <div class='card-body'>
            <app-post-header [post]='post'></app-post-header>
            <p class='card-text'>{{post.content}}</p>
          </div>
          <div class='card-footer'>
            <app-post-actions [post]='post'></app-post-actions>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PostsFeedComponent implements OnInit {

  posts = [
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

  results: any = [];

  filter(query: any): any{
    this.results = this.posts.filter( post => {
      return !query || (post.content.includes(query) || post.author.name.includes(query));
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.filter('');
  }

}
