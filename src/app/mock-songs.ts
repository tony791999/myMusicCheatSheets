import { Song } from './song';
import {SongSection} from "./song-section";
import {IndividualNote} from "./individual-note";

export const SONGS: Song[] = [
  {
    songTitle: 'My Old School',
    originalArtist: 'Steely Dan',
    songComposition:  [
      {
        songSectionId: 0,
        songSectionName: 'verse',
        songSectionMusicNotes: [
          {
            individualNoteName: 'G',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'E',
            individualNoteNumberOfCounts: 2
          }
        ] as IndividualNote[]
      },
      {
        songSectionId: 1,
        songSectionName: 'chorus',
        songSectionMusicNotes: [] as IndividualNote[]
      }
    ] as SongSection[],
    readyToPerform: false
  },
  { songTitle: 'Prelude in C', originalArtist: 'Bach', songComposition: [], readyToPerform: true },
  { songTitle: 'Hey Jude', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Sailing', originalArtist: 'Christopher Cross', songComposition: [], readyToPerform: true },
  { songTitle: 'Wave', originalArtist: 'Antonio Carlos Jobim', songComposition: [], readyToPerform: true },
  { songTitle: 'Tuxedo Junction', originalArtist: 'Glenn Miller', songComposition: [], readyToPerform: true },
  { songTitle: 'Dancing Queen', originalArtist: 'Abba', songComposition: [], readyToPerform: true },
  { songTitle: 'Whats Up', originalArtist: '4 Non Blondes', songComposition: [], readyToPerform: true },
  { songTitle: 'Imagine', originalArtist: 'John Lennon', songComposition: [], readyToPerform: true },
  { songTitle: 'Yesterday', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Long and Winding Road', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Time', originalArtist: 'Pink Floyd', songComposition: [], readyToPerform: true },
  { songTitle: 'Prelude in C', originalArtist: 'Bach', songComposition: [], readyToPerform: true },
  { songTitle: 'Hey Jude', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Sailing', originalArtist: 'Christopher Cross', songComposition: [], readyToPerform: true },
  { songTitle: 'Wave', originalArtist: 'Antonio Carlos Jobim', songComposition: [], readyToPerform: true },
  { songTitle: 'Tuxedo Junction', originalArtist: 'Glenn Miller', songComposition: [], readyToPerform: true },
  { songTitle: 'Dancing Queen', originalArtist: 'Abba', songComposition: [], readyToPerform: true },
  { songTitle: 'Whats Up', originalArtist: '4 Non Blondes', songComposition: [], readyToPerform: true },
  { songTitle: 'Imagine', originalArtist: 'John Lennon', songComposition: [], readyToPerform: true },
  { songTitle: 'Yesterday', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Long and Winding Road', originalArtist: 'the Beatles', songComposition: [], readyToPerform: true },
  { songTitle: 'Time', originalArtist: 'Pink Floyd', songComposition: [], readyToPerform: true },
  { songTitle: 'Prelude in C', originalArtist: 'Bach', songComposition: [], readyToPerform: true },
  { songTitle: 'Turkish March', originalArtist: 'Mozart', songComposition: [], readyToPerform: false }
];
