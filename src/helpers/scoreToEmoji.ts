import { GuessType } from "../types/guess";

export function scoreToEmoji(guesses: GuessType[]): string {
  const msInDay = 86400000;
  const startDate = new Date(Date.UTC(2022, 4, 2, 0, 0, 0));
  const todaysDate = new Date();
  const index = Math.floor((todaysDate.getTime() - startDate.getTime() )/msInDay) + 1 
  const emojis = {
    incorrect: "🟥",
    correct: "🟩",
    skip: "⬜",
    empty: "⬛️",
  };
  // const todaysDate = new Date();
  const prefix = `I solved today's Homestuck Heardle - #${index} 🎧`;
  const suffix = `Played at https://heardle.homestuck.net`

  let scoreEmoji = "";

  guesses.forEach((guess: GuessType) => {
    if (guess.isCorrect === true) {
      scoreEmoji += emojis.correct;
    } else if (guess.skipped === true) {
      scoreEmoji += emojis.skip;
    } else if (guess.isCorrect === false) {
      scoreEmoji += emojis.incorrect;
    } else {
      scoreEmoji += emojis.empty;
    }
  });

  return `${prefix} ${scoreEmoji} ${suffix}`;
}
