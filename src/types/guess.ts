import { Song } from "./song";

export type GuessType = {
  song: Song | undefined;
  isCorrect: boolean | undefined;
  rightAlbum: boolean | undefined;
  artistColor: string | undefined;
  tagColor: string | undefined;
};
