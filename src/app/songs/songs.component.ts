import { Component, OnInit } from '@angular/core';
import {Song} from "../song";
import {SongSection} from "../song-section";
import {SONGS} from '../mock-songs';
import {findIndex} from "rxjs";
import {IndividualNote} from "../individual-note";
// import {SONGCOMPOSITION} from '../mock-song-composition';

@Component({
    selector: 'app-songs',
    templateUrl: './songs.component.html',
    styleUrls: ['./songs.component.scss'],
    standalone: false
})
export class SongsComponent implements OnInit {
  songs = SONGS;
  // songComposition = this.songs.;

  // song: Song = {
  //   songTitle: 'Stairway to Heaven',
  //   readyToPerform: false
  // }

  constructor() { }

  ngOnInit(): void {
  }

  selectedSong?: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
  }






  addItem(songTitle: string, originalArtist: string) {
    this.songs.unshift({
      songTitle,
      originalArtist,
      readyToPerform: false
    });
  }

  addSongSection(songSectionName: string) {
    if (!this.selectedSong) {
      return; // Exit if no song is selected
    }

    if (!this.selectedSong.songComposition) {
      this.selectedSong.songComposition = [];
    }
    
    const newId = this.selectedSong.songComposition.length > 0 
      ? Math.max(...this.selectedSong.songComposition.map(section => section.songSectionId)) + 1 
      : 0;
    
    this.selectedSong.songComposition.push({
      songSectionName,
      songSectionId: newId,
      songSectionMusicNotes: []
    });
  }

  addSongSectionNote(individualNoteName: string, individualNoteNumberOfCounts: number, activeSongSectionId: number) {
    console.log(activeSongSectionId + 'activeSongSectionId');
    this.selectedSong?.songComposition?.forEach(function (value, index, array){
      console.log(value.songSectionId + 'value songSectionId');
      if (activeSongSectionId == value.songSectionId) {
        console.log(value.songSectionId + 'entered if clause');
        console.log(value.songSectionMusicNotes?.length + 'lengthBefore');
        value.songSectionMusicNotes?.push({
          individualNoteName,
          individualNoteNumberOfCounts
        });
        console.log(value.songSectionMusicNotes?.length + 'lengthAfter');
      }
    });
  }

}
