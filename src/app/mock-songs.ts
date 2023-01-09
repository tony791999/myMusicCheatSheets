import { Song } from './song';
import {SongSection} from "./song-section";
import {IndividualNote} from "./individual-note";

export const SONGS: Song[] = [
  {
    songTitle: 'Yesterday',
    originalArtist: 'Beatles',
    songComposition:  [
      {
        songSectionId: 0,
        songSectionName: 'Verse',
        songSectionMusicNotes: [
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'Em',
            individualNoteNumberOfCounts: 1
          },
          {
            individualNoteName: 'A7',
            individualNoteNumberOfCounts: 1
          },
          {
            individualNoteName: 'D',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'Bb',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 2
          }
        ] as IndividualNote[]
      },
      {
        songSectionId: 1,
        songSectionName: 'Chorus',
        songSectionMusicNotes: [
          {
            individualNoteName: 'Dm',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'A7',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'Bb',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 4
          }
        ] as IndividualNote[]
      }
    ] as SongSection[],
    readyToPerform: false
  },
  { songTitle: 'Whats Up', originalArtist: '4 non blondes',
    songComposition: [
      {
        songSectionId: 0,
        songSectionName: 'Verse',
        songSectionMusicNotes: [
          {
            individualNoteName: 'A',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'Bm',
            individualNoteNumberOfCounts: 1
          },
          {
            individualNoteName: 'D',
            individualNoteNumberOfCounts: 1
          },
          {
            individualNoteName: 'A',
            individualNoteNumberOfCounts: 4
          },
        ] as IndividualNote[]
      },
      {
        songSectionId: 1,
        songSectionName: 'Chorus',
        songSectionMusicNotes: [
          {
            individualNoteName: 'A7',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'Bm',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'D',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'A7',
            individualNoteNumberOfCounts: 4
          }
        ] as IndividualNote[]
      }
    ], readyToPerform: true },
  { songTitle: 'Hey Jude', originalArtist: 'the Beatles', songComposition: [
      {
        songSectionId: 0,
        songSectionName: 'Verse',
        songSectionMusicNotes: [
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'C',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'Bb',
            individualNoteNumberOfCounts: 4
          },
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 4
          },
        ] as IndividualNote[]
      },
      {
        songSectionId: 1,
        songSectionName: 'Chorus',
        songSectionMusicNotes: [
          {
            individualNoteName: 'Bb',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'a',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'G',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'F',
            individualNoteNumberOfCounts: 2
          },
          {
            individualNoteName: 'C',
            individualNoteNumberOfCounts: 4
          }
        ] as IndividualNote[]
      }
    ], readyToPerform: true }

];
