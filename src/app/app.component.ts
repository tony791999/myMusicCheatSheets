import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-music-cheat-sheets';

  filter: 'all' | 'active' | 'readyToPerform' = 'all';

  // allItems = [
  //   { songTitle: 'My Old School', originalArtist: 'Steely Dan', readyToPerform: false },
  //   { songTitle: 'Prelude in C', originalArtist: 'Bach', readyToPerform: true },
  //   { songTitle: 'Turkish March', originalArtist: 'Mozart', readyToPerform: false }
  // ];
  //
  // allSongSections = [
  //   { songSectionName: 'verse' },
  //   { songSectionName: 'chorus' }
  // ];

  // get items() {
  //   if (this.filter === 'all') {
  //     return this.allItems;
  //   }
  //   return this.allItems.filter(item => this.filter === 'readyToPerform' ? item.readyToPerform : !item.readyToPerform);
  // }
  //
  // get songSections() {
  //   return this.allSongSections;
  // }
  //
  // addItem(songTitle: string, originalArtist: string) {
  //   this.allItems.unshift({
  //     songTitle,
  //     originalArtist,
  //     readyToPerform: false
  //   });
  // }
  //
  // addSongSection(songSectionName: string) {
  //   this.allSongSections.unshift({
  //     songSectionName
  //   });
  // }

}
