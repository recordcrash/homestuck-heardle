import React from "react";

import { GuessType } from "../../types/guess";
import { Song } from "../../types/song";

import { Button, Guess, Player, Search, Result } from "../";
import { playTimes } from "../../constants";

import * as Styled from "./index.styled";

interface Props {
  guesses: GuessType[];
  todaysSolution: Song;
  currentTry: number;
  didGuess: boolean;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  skip: () => void;
  guess: () => void;
}

export function Game({
  guesses,
  todaysSolution,
  currentTry,
  didGuess,
  setSelectedSong,
  skip,
  guess,
}: Props) {
  if (didGuess || currentTry === 6) {
    return (
      <Result
        didGuess={didGuess}
        currentTry={currentTry}
        todaysSolution={todaysSolution}
        guesses={guesses}
      />
    );
  }
  return (
    <>
      {guesses.map((guess: GuessType, index) => (
        <Guess
          key={index}
          guess={guess}
          isCorrect={guess.isCorrect}
          active={index === currentTry}
        />
      ))}
      <Player id={todaysSolution.youtubeId} currentTry={currentTry} />
      <Search currentTry={currentTry} setSelectedSong={setSelectedSong}/>

      <Styled.Buttons>
        <Button onClick={skip}>
          {currentTry === 5
            ? "Give Up"
            : `Skip +${playTimes[currentTry] / 1000}s`}
        </Button>
        <Button variant="green" onClick={guess}>
          Submit
        </Button>
      </Styled.Buttons>
    </>
  );
}
