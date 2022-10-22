import { GuessType } from "../types/guess";
import { isWeekend } from "./isWeekend";

export const EMOJIS = {
  red: "⬜",
  yellow: "🟨",
  green: "🟩",
  blue: "🟦",
};

export function guessToEmoji(guess: GuessType): string {
  const songEmoji = guess.isCorrect ? (isWeekend ? EMOJIS.blue : EMOJIS.green) : EMOJIS.red;
  const artistEmoji =  EMOJIS[guess.artistColor as keyof typeof EMOJIS] ;
  const albumEmoji = guess.rightAlbum ? (isWeekend ? EMOJIS.blue : EMOJIS.green) : EMOJIS.red;
  const tagsEmoji =  EMOJIS[guess.tagColor as keyof typeof EMOJIS];
  return `${songEmoji}${artistEmoji}${albumEmoji}${tagsEmoji}`;
}

export function scoreToEmoji(guesses: GuessType[], noEmbed: boolean, noLinks: boolean): string {
  const msInDay = 86400000;
  const startDate = new Date(Date.UTC(2022, 4, 2, 0, 0, 0));
  const todaysDate = new Date();
  const index = Math.floor((todaysDate.getTime() - startDate.getTime() )/msInDay) + 1 ;
  let suffix = "";
  if (noLinks === false) suffix = noEmbed ? '\nPlayed at <https://heardle.homestuck.net>' : '\nPlayed at https://heardle.homestuck.net';

  let score = 'X';
  let scoreEmojis = "";

  guesses.forEach((guess: GuessType, index) => {
    if (guess.isCorrect) score = (index + 1).toString();
    if (guess.song) scoreEmojis +=  '\n' + guessToEmoji(guess);
  });

  const prefix = isWeekend ? `Homestuck Fanmusic Heardle #${index} ${score}/6` : `Homestuck Heardle #${index} ${score}/6`;

  return `${prefix}${scoreEmojis}${suffix}`;
}
