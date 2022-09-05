import {IndividualNote} from "./individualNote";

export interface SongSection {
  songSectionName: string;
  songSectionMusicNotes?: Array<IndividualNote>;
}
