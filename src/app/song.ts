import { SongSection } from "./songSection";

export interface Item {
  songTitle: string;
  originalArtist?: string;
  songComposition?: Array<SongSection>;
  readyToPerform: boolean;
}
