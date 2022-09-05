import {IndividualNote} from "./individual-note";

export interface SongSection {
  songSectionId: number;
  songSectionName: string;
  songSectionMusicNotes?: Array<IndividualNote>;
}
