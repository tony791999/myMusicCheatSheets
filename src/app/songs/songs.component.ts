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
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs = SONGS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedSong?: Song;
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  backToList() {
    this.selectedSong = undefined;
  }

  addItem(songTitle: string, originalArtist: string) {
    this.songs.unshift({
      songTitle,
      originalArtist,
      songComposition: [],
      readyToPerform: false
    });
  }

  addSongSection(songSectionName: string, songSectionId: number) {
    this.selectedSong?.songComposition?.push({
      songSectionName,
      songSectionId,
      songSectionMusicNotes: []
    });
  }

  addSongSectionNote(individualNoteName: string, individualNoteNumberOfCounts: number, activeSongSectionId: number) {
    this.selectedSong?.songComposition?.forEach(function (value, index, array){
      if (activeSongSectionId == value.songSectionId) {
        value.songSectionMusicNotes?.push({
          individualNoteName,
          individualNoteNumberOfCounts
        });
      }
    });
  }

}
