import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setUTCHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );

  const textForTry = ["Wow!", "Super!", "Congrats!", "Nice!"];

  const copyResult = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, false, false));
  }, [guesses]);

  const copyResultNoEmbed = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, true, false));
  }, [guesses]);

  const copyResultNoLinks = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, true, true));
  }, [guesses]);

  if (didGuess) {

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          You guessed it in {currentTry} {currentTry === 1 ? 'try' : 'tries'}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy results
        </Button>
        <Button onClick={copyResultNoEmbed} variant="darkgreen">
          Copy results (no Discord embed)
        </Button>
        <Button onClick={copyResultNoLinks} variant="darkgreen">
          Copy results (no links)
        </Button>
        <Styled.TimeToNext>
          Remember to come back in {hoursToNextDay}{" "} hours!
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Unfortunately, that&apos;s wrong</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy results
        </Button>
        <Button onClick={copyResultNoEmbed} variant="darkgreen">
          Copy results (no Discord embed)
        </Button>
        <Button onClick={copyResultNoLinks} variant="darkgreen">
          Copy results (no links)
        </Button>
        <Styled.TimeToNext>
          Try again in {hoursToNextDay}{" "} hours, or ask your Time player
        </Styled.TimeToNext>
      </>
    );
  }
}
