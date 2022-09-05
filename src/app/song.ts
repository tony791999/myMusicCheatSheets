import { SongSection } from "./song-section";

export interface Song {
  songTitle: string;
  originalArtist?: string;
  songComposition?: Array<SongSection>;
  readyToPerform: boolean;
}
