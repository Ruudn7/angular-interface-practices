import { Component } from '@angular/core';

@Component({
  selector: 'app-no-results',
  template: `
    <div class="card mb-4">
      <div class="card-body">
        <p class="card-text text-center text-mute">No Results</p>
      </div>
    </div>
  `,
  styles: []
})
export class NoResultsComponent { }
