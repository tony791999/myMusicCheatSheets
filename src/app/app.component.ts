import { Component } from '@angular/core';
import { SongsComponent } from './songs/songs.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [SongsComponent],
    standalone: true
})
export class AppComponent {
  title = 'my-music-cheat-sheets 2';

  // filter: 'all' | 'active' | 'readyToPerform' = 'all';



}
